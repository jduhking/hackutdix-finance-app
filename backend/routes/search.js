const { Client } = require('@elastic/elasticsearch')
const client = new Client({
  cloud: { id: process.env.ELASTIC_HOST_ID },
  auth: { apiKey: process.env.ELASTIC_KEY }
})

const search = async (query) => {
    
    const out = await client.search({
        index: "stock",
        suggest: {
            "stock-suggest": {
                prefix: query,
                completion: {
                    field: "name.completion",
                    fuzzy: {
                        fuzziness: 2
                    }
                }
            }
    }})
    return out
}


module.exports = function (router) {
    router.get("/search", async (req, res) => {
        const { q } = req.query
        if (!q) return res.status(400).json({ error: "No query provided" })
        try {
            const results = await search(q)
            return res.json(results)
        } catch (err) {
            if (!res.headersSent)
            {
                return res.status(500).json({ error: err.message || "Server Error" })
            }
        }    
    })
};