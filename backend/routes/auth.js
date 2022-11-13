const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

/* module.exports = function (router) {
    router.get("/auth", async (req, res) => {
        const { username, password } = req.query
        if (!username && !password) return res.status(400).json({ error: "Need username and password" })
        try {
            if()
        } catch (err) {
            if (!res.headersSent)
            {
                return res.status(500).json({ error: err.message || "Server Error" })
            }
        }    
    })
}; */

module.exports = function (router) {
    router.get("/portfolio", async (req, res) => {
        const { username, password} = req.body
        if (!username || !password) return res.status(400).json({ error: "Need username and password" })
        try {
            const user = await checkUser(username, password)
            if(user){
                const data = await prisma.user_Ticker.findMany({
                    where: {
                        userId: user.id,              
                    },
                    select: {
                        ticket: true
                    }
                })
                return res.status(200).json(data)
            }
        } catch (err) {
            if (!res.headersSent)
            {
                return res.status(500).json({ error: err.message || "Server Error" })
            }
        }    
    })
};

module.exports = function (router) {
    router.post("/portfolio", async (req, res) => {
        const { username, password , ticker} = req.body
        if (!username || !password || !ticker) return res.status(400).json({ error: "Need username and password" })
        try {
            const user = await checkUser(username, password)
            if(user){
                const data = await prisma.user_Ticker.create({
                    data: {
                        userId: user.id,
                        ticker: ticker
                    }
                })
                return res.status(200).json(data)
            }
        } catch (err) {
            if (!res.headersSent)
            {
                return res.status(500).json({ error: err.message || "Server Error" })
            }
        }    
    })
};

async function checkUser(username, password) {
    const user = await prisma.user.findFirst({
        where: {
            username: username,
            password: password
        }
    })
    return user

    //...
}