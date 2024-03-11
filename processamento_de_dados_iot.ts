// Definindo o tipo para os dados dos sensores
type SensorData = {
    sensorId: number;
    parameter: string;
    value: number;
    timestamp: Date;
  };
  
  // Dados brutos dos sensores (exemplo)
  const rawData: SensorData[] = [
    // ... dados dos sensores ...
  ];
  
  // Função para processar os dados brutos e calcular estatísticas
  function processSensorData(rawData: SensorData[]): Map<number, Record<string, number>> {
    // Função de mapeamento (map)
    const mappedData = rawData.map((data) => ({
      key: `${data.sensorId}-${data.parameter}-${data.timestamp.getHours()}`, // Agrupar por sensor, parâmetro e hora
      value: {
        sum: data.value,
        count: 1,
        max: data.value,
        min: data.value,
      },
    }));
  
    // Função de redução (reduce)
    const reducedData = mappedData.reduce((result, current) => {
      if (!result.has(current.key)) {
        result.set(current.key, current.value);
      } else {
        const existingValue = result.get(current.key)!;
        result.set(current.key, {
          sum: existingValue.sum + current.value.sum,
          count: existingValue.count + current.value.count,
          max: Math.max(existingValue.max, current.value.max),
          min: Math.min(existingValue.min, current.value.min),
        });
      }
      return result;
    }, new Map<number, Record<string, number>>());
  
    return reducedData;
  }
  
  // Função para calcular média, valor máximo e valor mínimo
  function calculateStats(aggregatedData: Map<number, Record<string, number>>): Record<string, Record<string, number>> {
    const stats: Record<string, Record<string, number>> = {};
  
    aggregatedData.forEach((value, key) => {
      const [sensorId, parameter, hour] = key.split('-');
      const average = value.sum / value.count;
      if (!stats[sensorId]) {
        stats[sensorId] = {};
      }
      if (!stats[sensorId][parameter]) {
        stats[sensorId][parameter] = {};
      }
      stats[sensorId][parameter][hour] = {
        average,
        max: value.max,
        min: value.min,
      };
    });
  
    return stats;
  }
  
  // Executando o processamento dos dados
  const aggregatedData = processSensorData(rawData);
  const finalStats = calculateStats(aggregatedData);
  
  console.log(finalStats);
  