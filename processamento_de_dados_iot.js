// Dados brutos dos sensores (exemplo)
var rawData = [
// ... dados dos sensores ...
];
// Função para processar os dados brutos e calcular estatísticas
function processSensorData(rawData) {
    // Função de mapeamento (map)
    var mappedData = rawData.map(function (data) { return ({
        key: "".concat(data.sensorId, "-").concat(data.parameter, "-").concat(data.timestamp.getHours()), // Agrupar por sensor, parâmetro e hora
        value: {
            sum: data.value,
            count: 1,
            max: data.value,
            min: data.value,
        },
    }); });
    // Função de redução (reduce)
    var reducedData = mappedData.reduce(function (result, current) {
        if (!result.has(current.key)) {
            result.set(current.key, current.value);
        }
        else {
            var existingValue = result.get(current.key);
            result.set(current.key, {
                sum: existingValue.sum + current.value.sum,
                count: existingValue.count + current.value.count,
                max: Math.max(existingValue.max, current.value.max),
                min: Math.min(existingValue.min, current.value.min),
            });
        }
        return result;
    }, new Map());
    return reducedData;
}
// Função para calcular média, valor máximo e valor mínimo
function calculateStats(aggregatedData) {
    var stats = {};
    aggregatedData.forEach(function (value, key) {
        var _a = key.split('-'), sensorId = _a[0], parameter = _a[1], hour = _a[2];
        var average = value.sum / value.count;
        if (!stats[sensorId]) {
            stats[sensorId] = {};
        }
        if (!stats[sensorId][parameter]) {
            stats[sensorId][parameter] = {};
        }
        stats[sensorId][parameter][hour] = {
            average: average,
            max: value.max,
            min: value.min,
        };
    });
    return stats;
}
// Executando o processamento dos dados
var aggregatedData = processSensorData(rawData);
var finalStats = calculateStats(aggregatedData);
console.log(finalStats);
