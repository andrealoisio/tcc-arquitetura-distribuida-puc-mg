import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@mui/material/Typography';
import ListAltIcon from '@mui/icons-material/ListAlt';
import MediaQuery from 'react-responsive'
import { useParams } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';
import dayjs from 'dayjs';

const columns = [
  { field: 'seq_formacao', headerName: 'id',  width: 80, hide:true },
  { field: 'nome_curso', headerName: 'Nome do Curso', width: 250,  },
  { field: 'titulo_tese', headerName: 'Título', width: 120  },
  { field: 'instituicao', headerName: 'Instituição', width: 200, },
  { field: 'area_conhecimento', headerName: 'Área de Conhecimento', width: 120 },
  { field: 'data_inicio', headerName: 'Data Inicio', width: 120 },
  { field: 'data_termino', headerName: 'Data Término', width: 120 },
];
// const rows = [
//   { seqFormacao: 101049, nomeCurso: 'Mestrado em Radiologia',  titulo: 'MsC', instituicao: 'UFMG', areaConhecimento: 'Radiologia', dataInicio: '01/01/2021', dataTermino: '01/01/2023' },
//   ];
const useStyles = makeStyles((theme) => ({
  disabled: {
    "& input.Mui-disabled": {
      color: 'black !important'
    },
  },
}));
export default function DetalheConveniados() {
  const { codigo } = useParams();
  const [prestador, setPrestador] = useState(null);
  // const [value, setValues] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [seqFormacao, setSeqFormacao] = useState(null)
  const [formacoes, setFormacoes] = useState([])

  console.log(dayjs().format('DD/MM/YYYY'))

  useEffect(() => {
    fetch(`http://localhost/prestadores/${codigo}`)
      .then(resp => {
        if (resp.ok) {
          return resp.json()
        } else if(resp.status === 404) {
          return Promise.reject('error 404')
        } else {
          return Promise.reject('some other error: ' + resp.status)
        }      
      })
      .then(resp => {
        setPrestador(resp)
        setSeqFormacao(resp.seq_formacao);
        setLoading(false)      
      })
      .catch(err => {
        setError(true)
        console.log(err)})
  }, [codigo])

  useEffect(() => {
    if (!seqFormacao) return;
    fetch(`http://localhost/formacoes/${seqFormacao}`)
      .then(resp => {
        if (resp.ok) {
          return resp.json()
        } else if(resp.status === 404) {
          return Promise.reject('error 404')
        } else {
          return Promise.reject('some other error: ' + resp.status)
        }      
      })
      .then(resp => {
        resp = [resp]
        resp = resp.map(item => ({...item, data_inicio: dayjs(item.data_inicio).format('DD/MM/YYYY'), data_termino: dayjs(item.data_termino).format('DD/MM/YYYY')}))
        setFormacoes(resp) 
        console.log([resp])
        setLoading(false)      
      })
      .catch(err => {
        setError(true)
        console.log(err)})
  }, [seqFormacao])

  console.log('codigo', codigo)
  const classes = useStyles();
  const value = {
    nome: 'Juvenal dos Santos Neves',
    email: 'Jotalhao01@gmail.com',
    cpf: '000.000.001-91',
    cnpj: '19.106.757/0001-92',
    especializacao: 'Fisioterapia',
    dataRegistro: '10/10/2010',
    telefone: '(31) 2607-8090',
    celular: '(11) 94770-8090',
    endereco: 'Av Humberto de Alencar Castelo Branco, 889',
    bairro: 'Vila das Flores',
    cidade: 'Belo Horizonte',
    uf: 'MG',
    cep: '07890020',
    banco: '001',
    agencia: '0001',
    conta: '01001',
  };



  return (
    <>
      <Typography variant="h6">
        <ListAltIcon /> Detalhe de Prestador
      </Typography>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          overflow: 'hidden',
          display: 'flex',
          flexWrap: 'wrap',
        }}
        noValidate
        autoComplete="off"
      >
        <Typography variant="h6">{codigo}</Typography>
        <div>
            {prestador && <>
              <MediaQuery minWidth="500px">
                {(matches) =>
                  matches
                    ? <><TextField multiline label="Nome" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={prestador.nome} sx={{ width: '280px !important', }} />
                      <TextField multiline label="e-mail" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={prestador.email} sx={{ width: '280px !important', }} /></>
                    : <><TextField multiline label="Nome" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={prestador.nome} sx={{ width: '80% !important', }} />
                      <TextField multiline label="e-mail" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={prestador.email} sx={{ width: '80% !important', }} /></>
                }
              </MediaQuery>
              <TextField label="CPF" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={prestador.cpf} />
              <TextField label="CNPJ" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={prestador.cnpj} />
              <TextField label="Especialização" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={prestador.especializacao} />
              <TextField label="Data de registro" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={prestador.data_registro} />
              <TextField label="Telefone" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={prestador.telefone} />
              <TextField label="Celular" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={prestador.celular} />
              <MediaQuery minWidth="500px">
                {(matches) =>
                  matches
                    ? <>
                      <TextField multiline label="Endereço" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={prestador.nome_endereco} sx={{ width: '400px !important', }} /></>
                    : <>
                      <TextField multiline label="Endereço" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={prestador.nome_endereco} sx={{ width: '80% !important', }} /></>
                }
              </MediaQuery>
              <TextField label="Bairro" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={prestador.bairro} />
              <TextField label="Cidade" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={prestador.cidade} />
              <TextField label="UF" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={prestador.uf} />
              <TextField label="CEP" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={prestador.cep} />
              <TextField label="Banco" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={prestador.banco} />
              <TextField label="Agência" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={prestador.agencia} />
              <TextField label="Conta Corrente" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={prestador.conta} />
              <Typography variant="h6"> <ListAltIcon /> Formação </Typography>
              
              {formacoes && formacoes.length > 0 &&
                <div style={{ height: 400, width: '100%' }}>
                  <DataGrid 
                    getRowId={row => row.seq_formacao}
                    rowOptions={{ selectable: true }} 
                    rows={formacoes}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                  />
                </div>
              }
            </>}
        </div>
      </Box>
    </>
  );
}
