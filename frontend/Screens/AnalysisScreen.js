import React, { useEffect, useState } from "react";
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

const axios = require("axios").default;

async function GetGraphHistory(ticker, time) {
const url = `${"https://hackutdix-finance-app-production.up.railway.app"}/get-stocks?ticker=${ticker}&time=${time}`
  console.log(
   {url}
  );
  const res = await axios.get(
    url
  );

  // console.log(res.data);

  return res.data;
}
//comme
function AnalysisScreen({ navigation }) {
  const { height, width, scale, fontScale } = useWindowDimensions();
  const [nums, setNums] = useState([1])
  const [time, setTime] = useState("1w")

useEffect(()=>{
  const data = async function()
  {
    const data2 = await GetGraphHistory("GOOGL", time);
   console.log(data2.history_data)
   const history = Object.values(data2.history_data).map((e)=>e.Close);
   console.log(history);
   setNums(history)
  }()
},[time])
  return (
    <View >
      <Text>Bezier Line Chart</Text>
      <LineChart
      withDots={false}
        data={{
          datasets: [
            {
              data: nums,
            },
          ],
        }}
        width={width} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
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
  <View style={{flexDirection: "row", width:"100%", justifyContent:"space-evenly"}}>
        <Button title="1w" onPress={()=>setTime("1wk")}/>
        <Button title="1m" onPress={()=>setTime("1mo")}/>
        <Button title="1y" onPress={()=>setTime("1y")}/>
        <Button title="5y" onPress={()=>setTime("5y")}/>
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