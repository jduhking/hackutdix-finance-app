import pprint
import json
from fastapi import FastAPI
import yfinance as yf

app = FastAPI()




@app.get("/stock/")
async def root(ticker: str):
    appl = yf.Ticker(ticker)
    pprint.pprint(appl.history(period="max"))
    return {"message": appl.info}

@app.get("/history/")
async def history(ticker: str, period: str = "1wk"):
    appl = yf.Ticker(ticker)
    history = appl.history(period=period)
    

    
    return {
        "message": history.to_dict("index")
    }