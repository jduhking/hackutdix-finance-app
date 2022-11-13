const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()


module.exports = function (router) {
    router.post("/portfolio", async (req, res) => {
        const { username, password , ticker} = req.body
        if (!username || !password || !ticker) return res.status(400).json({ error: "Need username and password" })
        try {
            const user = await getUser(username, password)
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
    router.post("/auth", async (req, res) => {
        const { username, password } = req.body
        if (!username || !password) return res.status(400).json({ error: "Need username and password" })
        try {
            const user = await prisma.user.findFirst({
                where: {
                    username: username
                }
            })
            if(user){
                if(user.password === password){
                    return res.status(200).json({message: "Successful"})
                }else{
                    return res.status(401)
                }
            }else{
                await prisma.user.create({
                    data: {
                        username: username,
                        password: password,
                    }
                })
                return res.status(201).json({message: "Successful"})
            }

        } catch (err) {
            if (!res.headersSent)
            {
                return res.status(500).json({ error: err.message || "Server Error" })
            }
        }    
    }),

    router.delete("/portfolio", async (req, res) => {
        const { username, password, ticker} = req.body
        if (!username || !password || !ticker) return res.status(400).json({ error: "Need username and password" })
        console.log(username)
        try {
            const user = await getUser(username, password)
            console.log(user)
            if(user){
                const data = await prisma.user_Ticker.delete({
                    where: {
                        userId: user.id,     
                        ticker: ticker
                    }
                })
                return res.status(200).json(data.map(val => val.ticker))
            }else{
                console.log("fnwoe")
                return res.status(400).json({message: "User does not exist"})
            }
        } catch (err) {
            if (!res.headersSent)
            {
                return res.status(500).json({ error: err.message || "Server Error" })
            }else{
                return res.status(500).json({ error: err.message || "Server Error" })
            }
        }    
    })
    
    router.get("/portfolio", async (req, res) => {
        const { username, password} = req.body
        if (!username || !password) return res.status(400).json({ error: "Need username and password" })
        console.log(username)
        try {
            const user = await getUser(username, password)
            console.log(user)
            if(user){
                const data = await prisma.user_Ticker.findMany({
                    where: {
                        userId: user.id,              
                    },
                    select: {
                        ticker: true
                    }
                })
                return res.status(200).json(data.map(val => val.ticker))
            }else{
                console.log("fnwoe")
                return res.status(400).json({message: "User does not exist"})
            }
        } catch (err) {
            if (!res.headersSent)
            {
                return res.status(500).json({ error: err.message || "Server Error" })
            }else{
                return res.status(500).json({ error: err.message || "Server Error" })
            }
        }    
    })
};

async function getUser(username, password) {
    const user = await prisma.user.findFirst({
        where: {
            username: username,
            password: password
        }
    })
    return user

    //...
}