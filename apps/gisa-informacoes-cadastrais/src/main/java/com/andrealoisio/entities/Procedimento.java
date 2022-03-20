package com.andrealoisio.entities;

import javax.persistence.*;
import java.math.BigDecimal;
import java.sql.Date;

@Entity
public class Procedimento {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "seq_procedimento", nullable = false)
    private int seqProcedimento;
    @Column(name = "tabela_referencia")
    private String tabelaReferencia;
    private java.math.BigDecimal custo;
    @Column(name = "ind_somente_particular")
    private boolean indSomenteParticular;
    @Column(name = "ind_cortesia")
    private boolean indCortesia;
    @Column(name = "data_registro")
    private java.sql.Date dataRegistro;
    private String descricao;

    public int getSeqProcedimento() {
        return seqProcedimento;
    }

    public void setSeqProcedimento(int seqProcedimento) {
        this.seqProcedimento = seqProcedimento;
    }

    public String getTabelaReferencia() {
        return tabelaReferencia;
    }

    public void setTabelaReferencia(String tabelaReferencia) {
        this.tabelaReferencia = tabelaReferencia;
    }

    public BigDecimal getCusto() {
        return custo;
    }

    public void setCusto(BigDecimal custo) {
        this.custo = custo;
    }

    public boolean isIndSomenteParticular() {
        return indSomenteParticular;
    }

    public void setIndSomenteParticular(boolean indSomenteParticular) {
        this.indSomenteParticular = indSomenteParticular;
    }

    public boolean isIndCortesia() {
        return indCortesia;
    }

    public void setIndCortesia(boolean indCortesia) {
        this.indCortesia = indCortesia;
    }

    public Date getDataRegistro() {
        return dataRegistro;
    }

    public void setDataRegistro(Date dataRegistro) {
        this.dataRegistro = dataRegistro;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }
}
