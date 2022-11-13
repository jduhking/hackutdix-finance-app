const { Client } = require('@elastic/elasticsearch')
const client = new Client({
  cloud: { id: process.env.ELASTIC_HOST_ID },
  auth: { apiKey: process.env.ELASTIC_KEY }
})

const search = async (query) => {
    const body = {
        "query": {
            "match_phrase": {
                "message": query
            }
        }
    }
    
    const out = await client.search(body)
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