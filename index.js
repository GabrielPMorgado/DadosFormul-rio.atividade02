import express from 'express';
const app = express();
const host='0.0.0.0';
const porta = 3000;
var listaCarros= [];

app.use(express.static(path.join(process.cwd(), 'pagina')));

app.use('/CadastroDveiculo', (req,resp)=>{

    const marca=req.query.marca;
    const modelo=req.query.modelo;
    const ano=req.query.ano;
    const cor=req.query.cor;
    const placa=req.query.placa;

    listaCarros.push({
        nome: marca,
        modelo: modelo,
        ano: ano,
        cor: cor,
        placa: placa,
     });

     resp.write('<html>');
     resp.write('<head>');
     resp.write('<title>Resultado do cadastro de veiculo</title>');
     resp.write('<meta charset="utf-8">');
     resp.write('</head>');
     resp.write('<body>');
     resp.write(`<h1> Carro ${marca} ${modelo} cadastrado com sucesso!</h1>`);
     resp.write('<a href="/cadastroDveiculo.html">Continuar cadastrando....</a>');
     resp.write("<br/>");
     resp.write('<a href="/listarUsuarios">Listar Usuários</a>');
     resp.write("</body>");
     resp.write('</html>')
     resp.end();
 });
 
 app.use('/listaCarros', (req,resp)=>{
    resp.write('<html>');
    resp.write('<head>');
    resp.write('<title>Carros Cadastrados</title>');
    resp.write('<meta charset="utf-8">');
    resp.write('</head>');
    resp.write('<body>');
    resp.write('<h1>Lista de Carros</h1>');
    resp.write('<table class="table table-striped">');
    resp.write('<tr>');
    resp.write('<th>Marca</th>');
    resp.write('<th>Modelo</th>');
    resp.write('<th>Ano</th>');
    resp.write('<th>Cor</th>');
    resp.write('<th>Placa</th>');
    resp.write('</tr>');
    for (let i=0; i<listaCarros.length; i++){
        resp.write('<tr>');
        resp.write(`<td>${listaCarros[i].marca}`);
        resp.write(`<td>${listaCarros[i].modelo}`);
        resp.write(`<td>${listaCarros[i].ano}`);
        resp.write(`<td>${listaCarros[i].cor}`);
        resp.write(`<td>${listaCarros[i].placa}`);
        resp.write('</tr>');
    }
    resp.write('</table>');
    resp.write('<a href="/">Voltar</a>');
    resp.write('</body>');
    resp.write('</html>');
    resp.end();
});






app.listen(porta, host,()=>{
    console.log(`Servidor executando em http://${host}:${porta}.`);
});
