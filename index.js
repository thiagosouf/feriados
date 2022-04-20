import express from 'express';

const holidays = [
    { date: "1/1/2022", name: "Confraternização mundial" },
    { date: "1/3/2022", name: "Carnaval" },
    { date: "4/17/2022", name: "Páscoa" },
    { date: "4/21/2022", name: "Tiradentes" },
    { date: "5/1/2022", name: "Dia do trabalho" },
    { date: "6/16/2022", name: "Corpus Christi" },
    { date: "9/7/2022", name: "Independência do Brasil" },
    { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
    { date: "11/2/2022", name: "Finados" },
    { date: "11/15/2022", name: "Proclamação da República" },
    { date: "12/25/2022", name: "Natal" }
  ];

const app = express();
app.get("/holidays", (req, res) => {
    
    res.send(holidays);
})

app.get("/is-today-holiday",(req,res) => {
    const hoje = new Date();
    const today = hoje.toLocaleDateString(`en-US`);
    // const today = "1/1/2022";
    let feriado = holidays.filter(function(obj) { return obj.date == today; });
    feriado.length > 0 ? res.send(`Sim, hoje é ${feriado[0].name}`) : res.send("Não há feriado hoje!");
})

app.get("/holidays/:mes", (req, res) => {
    const mes = req.params.mes;
    const feriados = holidays.map(function(obj) { return obj.date.split("/")[0]; });
    if (feriados.includes(mes)){
        const feriadoMes = holidays.filter(function(obj) { return obj.date.split("/")[0] == mes; });
        res.send(feriadoMes);
    }else{
        res.send("Não há feriados neste mês!");
    }

})
app.listen(4000);