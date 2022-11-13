import React, { useEffect, useState } from "react";
import { useRoute } from '@react-navigation/native'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  useWindowDimensions,
} from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import colors from "../Components/colors";

const axios = require("axios").default;



async function GetRisk(ticker, time) {
  const url = `${"https://hackutdix-finance-app-production.up.railway.app"}/get-risk?ticker=${ticker}&time=${time}`
  console.log(
    { url }
  );
  const res = await axios.get(
    url
  );

  //console.log(res.data);

  return res.data;
}

async function GetGraphHistory(ticker, time) {
  const url = `${"https://hackutdix-finance-app-production.up.railway.app"}/get-stocks?ticker=${ticker}&time=${time}`
  console.log(
    { url }
  );
  const res = await axios.get(
    url
  );

  //console.log(res.data);

  return res.data;
}
//comme
function AnalysisScreen({ navigation }) {
  const route = useRoute();
  const { height, width, scale, fontScale } = useWindowDimensions();
  const [nums, setNums] = useState([1])
  const [time, setTime] = useState("1wk")
  const [risky, setRisky] = useState(null)
  const [volatility, setVolatility] = useState(null)

  useEffect(() => {

  }, [])

  useEffect(() => {
    const data = async function () {
      const data2 = await GetGraphHistory(route.params._source.ticker, time)
      const risk = await GetRisk(route.params._source.ticker, time);
      console.log(data2)
      console.log(risk)
      setVolatility(risk.volatility)
      setRisky(risk.m.replace("volatility", "risk"))

      const history = Object.values(data2.history_data).map((e) => e.Close);
      console.log(history);
      setNums(history)
    }()
  }, [time])
  return (
    <View >
      <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ margin: 20, fontWeight: '600', fontSize: '15' }}>{route.params._source.name}</Text>
      </View>
      <LineChart
        fromZero={true}
        withDots={false}
        data={{
          datasets: [
            {
              data: nums,
            },
          ],
        }}
        width={width} // from react-native
        withVerticalLines={false}
        withHorizontalLines={false}
        height={220}
        yAxisLabel="$"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: colors.white,
          backgroundGradientFrom: colors.white,
          backgroundGradientTo: colors.white,
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
      <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-evenly" }}>
          <Button title="1w" onPress={() => setTime("1wk")} />
          <Button title="1m" onPress={() => setTime("1mo")} />
          <Button title="1y" onPress={() => setTime("1y")} />
          <Button title="5y" onPress={() => setTime("5y")} />
      </View>
      <View style={{width:'100%', justifyContent:'center', alignItems:'center', marginTop:100,height:50}}>
        <Text Style={{fontSize:30, fontWeight:'600'}}>RISK</Text>
        <View style={{width:'80%', backgroundColor:'#C2C2C2', height: 70, borderRadius:15, marginBottom: 15}}>
          <View style={{width:`${volatility}%`, backgroundColor:colors.blue, height:'100%', borderRadius:15}}/>
        </View>
        <Text>{risky}</Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AnalysisScreen;