import pprint
import json
from fastapi import FastAPI
import yfinance as yf

app = FastAPI()




@app.get("/profile/")
async def root(ticker: str):
    appl = yf.Ticker(ticker)
    pprint.pprint(appl.history(period="max"))
    return {"message": appl.info}

@app.get("/history/")
async def history(ticker: str, period: str = "1wk"):
    appl = yf.Ticker(ticker)
    history = appl.history(period=period)
    
 
    return {
        "history_data": history.to_dict("index"),
        "variance": history.var(),
        "standard_deviation": history.std()
    }
