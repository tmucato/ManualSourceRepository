/// <reference path="../Scripts/msls.js" />

window.myapp = msls.application;

(function (lightSwitchApplication) {

    var $Entity = msls.Entity,
        $DataService = msls.DataService,
        $DataWorkspace = msls.DataWorkspace,
        $defineEntity = msls._defineEntity,
        $defineDataService = msls._defineDataService,
        $defineDataWorkspace = msls._defineDataWorkspace,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString;

    function amostrastb(entitySet) {
        /// <summary>
        /// Represents the amostrastb entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this amostrastb.
        /// </param>
        /// <field name="id" type="String">
        /// Gets or sets the id for this amostrastb.
        /// </field>
        /// <field name="numordem" type="String">
        /// Gets or sets the numordem for this amostrastb.
        /// </field>
        /// <field name="datarecepcao" type="Date">
        /// Gets or sets the datarecepcao for this amostrastb.
        /// </field>
        /// <field name="nit_nid" type="String">
        /// Gets or sets the nit_nid for this amostrastb.
        /// </field>
        /// <field name="NIT" type="String">
        /// Gets or sets the nIT for this amostrastb.
        /// </field>
        /// <field name="NID" type="String">
        /// Gets or sets the nID for this amostrastb.
        /// </field>
        /// <field name="nome" type="String">
        /// Gets or sets the nome for this amostrastb.
        /// </field>
        /// <field name="sexo" type="String">
        /// Gets or sets the sexo for this amostrastb.
        /// </field>
        /// <field name="idade" type="Number">
        /// Gets or sets the idade for this amostrastb.
        /// </field>
        /// <field name="residencia" type="String">
        /// Gets or sets the residencia for this amostrastb.
        /// </field>
        /// <field name="telefone" type="String">
        /// Gets or sets the telefone for this amostrastb.
        /// </field>
        /// <field name="proveniencia" type="String">
        /// Gets or sets the proveniencia for this amostrastb.
        /// </field>
        /// <field name="tipoamostra" type="String">
        /// Gets or sets the tipoamostra for this amostrastb.
        /// </field>
        /// <field name="causarejeicao" type="String">
        /// Gets or sets the causarejeicao for this amostrastb.
        /// </field>
        /// <field name="tipodoente" type="String">
        /// Gets or sets the tipodoente for this amostrastb.
        /// </field>
        /// <field name="motivoexame" type="String">
        /// Gets or sets the motivoexame for this amostrastb.
        /// </field>
        /// <field name="mescontrolo" type="Number">
        /// Gets or sets the mescontrolo for this amostrastb.
        /// </field>
        /// <field name="usreferencia" type="String">
        /// Gets or sets the usreferencia for this amostrastb.
        /// </field>
        /// <field name="dataenvio" type="Date">
        /// Gets or sets the dataenvio for this amostrastb.
        /// </field>
        /// <field name="examesolicitado" type="String">
        /// Gets or sets the examesolicitado for this amostrastb.
        /// </field>
        /// <field name="iniciaistecnicoenvio" type="String">
        /// Gets or sets the iniciaistecnicoenvio for this amostrastb.
        /// </field>
        /// <field name="bkresultado1" type="String">
        /// Gets or sets the bkresultado1 for this amostrastb.
        /// </field>
        /// <field name="bkdatarecepcao1" type="Date">
        /// Gets or sets the bkdatarecepcao1 for this amostrastb.
        /// </field>
        /// <field name="bkresultado2" type="String">
        /// Gets or sets the bkresultado2 for this amostrastb.
        /// </field>
        /// <field name="bkdatarecepcao2" type="Date">
        /// Gets or sets the bkdatarecepcao2 for this amostrastb.
        /// </field>
        /// <field name="xpertresultado" type="String">
        /// Gets or sets the xpertresultado for this amostrastb.
        /// </field>
        /// <field name="xpertdatarecepcao" type="Date">
        /// Gets or sets the xpertdatarecepcao for this amostrastb.
        /// </field>
        /// <field name="rifresultado" type="String">
        /// Gets or sets the rifresultado for this amostrastb.
        /// </field>
        /// <field name="rifdatarecepcao" type="Date">
        /// Gets or sets the rifdatarecepcao for this amostrastb.
        /// </field>
        /// <field name="lpa1h_resultado" type="String">
        /// Gets or sets the lpa1h_resultado for this amostrastb.
        /// </field>
        /// <field name="lpa1r_resultado" type="String">
        /// Gets or sets the lpa1r_resultado for this amostrastb.
        /// </field>
        /// <field name="lpa1datarecepcao" type="Date">
        /// Gets or sets the lpa1datarecepcao for this amostrastb.
        /// </field>
        /// <field name="lpa2fq_resultado" type="String">
        /// Gets or sets the lpa2fq_resultado for this amostrastb.
        /// </field>
        /// <field name="lpa2ag_resultado" type="String">
        /// Gets or sets the lpa2ag_resultado for this amostrastb.
        /// </field>
        /// <field name="lpa2datarecepcao" type="Date">
        /// Gets or sets the lpa2datarecepcao for this amostrastb.
        /// </field>
        /// <field name="cultura" type="String">
        /// Gets or sets the cultura for this amostrastb.
        /// </field>
        /// <field name="culturadatarecepcao" type="Date">
        /// Gets or sets the culturadatarecepcao for this amostrastb.
        /// </field>
        /// <field name="idetinficacao" type="String">
        /// Gets or sets the idetinficacao for this amostrastb.
        /// </field>
        /// <field name="identificacaodata" type="Date">
        /// Gets or sets the identificacaodata for this amostrastb.
        /// </field>
        /// <field name="tsa1h_resultado" type="String">
        /// Gets or sets the tsa1h_resultado for this amostrastb.
        /// </field>
        /// <field name="tsa1s_resultado" type="String">
        /// Gets or sets the tsa1s_resultado for this amostrastb.
        /// </field>
        /// <field name="tsa1r_resultado" type="String">
        /// Gets or sets the tsa1r_resultado for this amostrastb.
        /// </field>
        /// <field name="tsa1e_resultado" type="String">
        /// Gets or sets the tsa1e_resultado for this amostrastb.
        /// </field>
        /// <field name="tsa1z_resultado" type="String">
        /// Gets or sets the tsa1z_resultado for this amostrastb.
        /// </field>
        /// <field name="tsa1datarecepcao" type="Date">
        /// Gets or sets the tsa1datarecepcao for this amostrastb.
        /// </field>
        /// <field name="tsa2ofl_resultado" type="String">
        /// Gets or sets the tsa2ofl_resultado for this amostrastb.
        /// </field>
        /// <field name="tsa2mox_resultado" type="String">
        /// Gets or sets the tsa2mox_resultado for this amostrastb.
        /// </field>
        /// <field name="tsa2kan_resultado" type="String">
        /// Gets or sets the tsa2kan_resultado for this amostrastb.
        /// </field>
        /// <field name="tsa2amk_resultado" type="String">
        /// Gets or sets the tsa2amk_resultado for this amostrastb.
        /// </field>
        /// <field name="tsa2cap_resultado" type="String">
        /// Gets or sets the tsa2cap_resultado for this amostrastb.
        /// </field>
        /// <field name="tsa2datarecepcao" type="Date">
        /// Gets or sets the tsa2datarecepcao for this amostrastb.
        /// </field>
        /// <field name="dataenvioresultado" type="Date">
        /// Gets or sets the dataenvioresultado for this amostrastb.
        /// </field>
        /// <field name="iniciaistecnicodevolve" type="String">
        /// Gets or sets the iniciaistecnicodevolve for this amostrastb.
        /// </field>
        /// <field name="obs" type="String">
        /// Gets or sets the obs for this amostrastb.
        /// </field>
        /// <field name="details" type="msls.application.amostrastb.Details">
        /// Gets the details for this amostrastb.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ccr(entitySet) {
        /// <summary>
        /// Represents the ccr entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this ccr.
        /// </param>
        /// <field name="id" type="Number">
        /// Gets or sets the id for this ccr.
        /// </field>
        /// <field name="nyear" type="Number">
        /// Gets or sets the nyear for this ccr.
        /// </field>
        /// <field name="nlivro" type="String">
        /// Gets or sets the nlivro for this ccr.
        /// </field>
        /// <field name="nr_consulta" type="Number">
        /// Gets or sets the nr_consulta for this ccr.
        /// </field>
        /// <field name="dataconsulta" type="Date">
        /// Gets or sets the dataconsulta for this ccr.
        /// </field>
        /// <field name="age" type="Number">
        /// Gets or sets the age for this ccr.
        /// </field>
        /// <field name="ageunit" type="String">
        /// Gets or sets the ageunit for this ccr.
        /// </field>
        /// <field name="mot_nid_cpn" type="String">
        /// Gets or sets the mot_nid_cpn for this ccr.
        /// </field>
        /// <field name="mot_nid_tarv" type="String">
        /// Gets or sets the mot_nid_tarv for this ccr.
        /// </field>
        /// <field name="mot_hiv_lact" type="Boolean">
        /// Gets or sets the mot_hiv_lact for this ccr.
        /// </field>
        /// <field name="mot_hiv_tarv" type="Boolean">
        /// Gets or sets the mot_hiv_tarv for this ccr.
        /// </field>
        /// <field name="contactotb" type="Boolean">
        /// Gets or sets the contactotb for this ccr.
        /// </field>
        /// <field name="desnutricao_aguda" type="String">
        /// Gets or sets the desnutricao_aguda for this ccr.
        /// </field>
        /// <field name="exposicaoHIV" type="Boolean">
        /// Gets or sets the exposicaoHIV for this ccr.
        /// </field>
        /// <field name="outracondicaorisco" type="String">
        /// Gets or sets the outracondicaorisco for this ccr.
        /// </field>
        /// <field name="pisoniazidainicio" type="Date">
        /// Gets or sets the pisoniazidainicio for this ccr.
        /// </field>
        /// <field name="pisoniazida" type="String">
        /// Gets or sets the pisoniazida for this ccr.
        /// </field>
        /// <field name="aleitmaternomenor6m" type="String">
        /// Gets or sets the aleitmaternomenor6m for this ccr.
        /// </field>
        /// <field name="aleitmaternonaior6m" type="Boolean">
        /// Gets or sets the aleitmaternonaior6m for this ccr.
        /// </field>
        /// <field name="atpu" type="Number">
        /// Gets or sets the atpu for this ccr.
        /// </field>
        /// <field name="csb_nut_sup" type="Boolean">
        /// Gets or sets the csb_nut_sup for this ccr.
        /// </field>
        /// <field name="recuperada" type="Boolean">
        /// Gets or sets the recuperada for this ccr.
        /// </field>
        /// <field name="internamento" type="Boolean">
        /// Gets or sets the internamento for this ccr.
        /// </field>
        /// <field name="ctz" type="String">
        /// Gets or sets the ctz for this ccr.
        /// </field>
        /// <field name="profiaxia_arv" type="Boolean">
        /// Gets or sets the profiaxia_arv for this ccr.
        /// </field>
        /// <field name="colheitapcmaior2mes" type="String">
        /// Gets or sets the colheitapcmaior2mes for this ccr.
        /// </field>
        /// <field name="colheitapcrmenor2mes" type="String">
        /// Gets or sets the colheitapcrmenor2mes for this ccr.
        /// </field>
        /// <field name="resultadopcrmaior2meses" type="String">
        /// Gets or sets the resultadopcrmaior2meses for this ccr.
        /// </field>
        /// <field name="resultadopcrmenor2meses" type="String">
        /// Gets or sets the resultadopcrmenor2meses for this ccr.
        /// </field>
        /// <field name="resultadotesterapido" type="String">
        /// Gets or sets the resultadotesterapido for this ccr.
        /// </field>
        /// <field name="resultadofinal" type="String">
        /// Gets or sets the resultadofinal for this ccr.
        /// </field>
        /// <field name="resulttrapido_nexp" type="String">
        /// Gets or sets the resulttrapido_nexp for this ccr.
        /// </field>
        /// <field name="saidaccr" type="String">
        /// Gets or sets the saidaccr for this ccr.
        /// </field>
        /// <field name="chd_nid_tarv" type="String">
        /// Gets or sets the chd_nid_tarv for this ccr.
        /// </field>
        /// <field name="obs" type="String">
        /// Gets or sets the obs for this ccr.
        /// </field>
        /// <field name="providername" type="String">
        /// Gets or sets the providername for this ccr.
        /// </field>
        /// <field name="motart_5m_chd" type="Boolean">
        /// Gets or sets the motart_5m_chd for this ccr.
        /// </field>
        /// <field name="tb" type="Boolean">
        /// Gets or sets the tb for this ccr.
        /// </field>
        /// <field name="dam_dag" type="String">
        /// Gets or sets the dam_dag for this ccr.
        /// </field>
        /// <field name="ce" type="Boolean">
        /// Gets or sets the ce for this ccr.
        /// </field>
        /// <field name="tpicomp" type="Boolean">
        /// Gets or sets the tpicomp for this ccr.
        /// </field>
        /// <field name="ame_5m" type="Boolean">
        /// Gets or sets the ame_5m for this ccr.
        /// </field>
        /// <field name="mixed_5m" type="Boolean">
        /// Gets or sets the mixed_5m for this ccr.
        /// </field>
        /// <field name="rec" type="Boolean">
        /// Gets or sets the rec for this ccr.
        /// </field>
        /// <field name="trans_int" type="Boolean">
        /// Gets or sets the trans_int for this ccr.
        /// </field>
        /// <field name="arv_5m" type="Boolean">
        /// Gets or sets the arv_5m for this ccr.
        /// </field>
        /// <field name="pcr_under2m" type="Boolean">
        /// Gets or sets the pcr_under2m for this ccr.
        /// </field>
        /// <field name="pcr_above2m" type="Boolean">
        /// Gets or sets the pcr_above2m for this ccr.
        /// </field>
        /// <field name="pcrpos_under2m" type="Boolean">
        /// Gets or sets the pcrpos_under2m for this ccr.
        /// </field>
        /// <field name="pcrpos_above2m" type="Boolean">
        /// Gets or sets the pcrpos_above2m for this ccr.
        /// </field>
        /// <field name="pnctl" type="Boolean">
        /// Gets or sets the pnctl for this ccr.
        /// </field>
        /// <field name="ccrsegs" type="msls.EntityCollection" elementType="msls.application.ccrseg">
        /// Gets the ccrsegs for this ccr.
        /// </field>
        /// <field name="child" type="msls.application.child">
        /// Gets or sets the child for this ccr.
        /// </field>
        /// <field name="details" type="msls.application.ccr.Details">
        /// Gets the details for this ccr.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ccrseg(entitySet) {
        /// <summary>
        /// Represents the ccrseg entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this ccrseg.
        /// </param>
        /// <field name="id" type="Number">
        /// Gets or sets the id for this ccrseg.
        /// </field>
        /// <field name="idchild" type="Number">
        /// Gets or sets the idchild for this ccrseg.
        /// </field>
        /// <field name="mothTarv5moth" type="String">
        /// Gets or sets the mothTarv5moth for this ccrseg.
        /// </field>
        /// <field name="ame5m" type="Boolean">
        /// Gets or sets the ame5m for this ccrseg.
        /// </field>
        /// <field name="am5m" type="Boolean">
        /// Gets or sets the am5m for this ccrseg.
        /// </field>
        /// <field name="recuperada" type="Boolean">
        /// Gets or sets the recuperada for this ccrseg.
        /// </field>
        /// <field name="transinter" type="Boolean">
        /// Gets or sets the transinter for this ccrseg.
        /// </field>
        /// <field name="arv5m" type="Boolean">
        /// Gets or sets the arv5m for this ccrseg.
        /// </field>
        /// <field name="pcrmen2m" type="Boolean">
        /// Gets or sets the pcrmen2m for this ccrseg.
        /// </field>
        /// <field name="pcrmai2m" type="Boolean">
        /// Gets or sets the pcrmai2m for this ccrseg.
        /// </field>
        /// <field name="pcrposmen2m" type="Boolean">
        /// Gets or sets the pcrposmen2m for this ccrseg.
        /// </field>
        /// <field name="pcrposmai2m" type="Boolean">
        /// Gets or sets the pcrposmai2m for this ccrseg.
        /// </field>
        /// <field name="tb" type="Boolean">
        /// Gets or sets the tb for this ccrseg.
        /// </field>
        /// <field name="dam" type="Boolean">
        /// Gets or sets the dam for this ccrseg.
        /// </field>
        /// <field name="dag" type="Boolean">
        /// Gets or sets the dag for this ccrseg.
        /// </field>
        /// <field name="ce9m" type="Boolean">
        /// Gets or sets the ce9m for this ccrseg.
        /// </field>
        /// <field name="pnctl" type="Boolean">
        /// Gets or sets the pnctl for this ccrseg.
        /// </field>
        /// <field name="tpi" type="Boolean">
        /// Gets or sets the tpi for this ccrseg.
        /// </field>
        /// <field name="abandono9" type="Boolean">
        /// Gets or sets the abandono9 for this ccrseg.
        /// </field>
        /// <field name="obito9" type="Boolean">
        /// Gets or sets the obito9 for this ccrseg.
        /// </field>
        /// <field name="ce18m" type="Boolean">
        /// Gets or sets the ce18m for this ccrseg.
        /// </field>
        /// <field name="resultado18" type="Boolean">
        /// Gets or sets the resultado18 for this ccrseg.
        /// </field>
        /// <field name="transferidaCCS" type="Boolean">
        /// Gets or sets the transferidaCCS for this ccrseg.
        /// </field>
        /// <field name="transferidaCI" type="Boolean">
        /// Gets or sets the transferidaCI for this ccrseg.
        /// </field>
        /// <field name="transferidaUS" type="Boolean">
        /// Gets or sets the transferidaUS for this ccrseg.
        /// </field>
        /// <field name="abandono18" type="Boolean">
        /// Gets or sets the abandono18 for this ccrseg.
        /// </field>
        /// <field name="obito18" type="Boolean">
        /// Gets or sets the obito18 for this ccrseg.
        /// </field>
        /// <field name="ccr" type="msls.application.ccr">
        /// Gets or sets the ccr for this ccrseg.
        /// </field>
        /// <field name="details" type="msls.application.ccrseg.Details">
        /// Gets the details for this ccrseg.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function child(entitySet) {
        /// <summary>
        /// Represents the child entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this child.
        /// </param>
        /// <field name="id" type="Number">
        /// Gets or sets the id for this child.
        /// </field>
        /// <field name="nid_ccr" type="String">
        /// Gets or sets the nid_ccr for this child.
        /// </field>
        /// <field name="name" type="String">
        /// Gets or sets the name for this child.
        /// </field>
        /// <field name="residence" type="String">
        /// Gets or sets the residence for this child.
        /// </field>
        /// <field name="gender" type="String">
        /// Gets or sets the gender for this child.
        /// </field>
        /// <field name="phone" type="String">
        /// Gets or sets the phone for this child.
        /// </field>
        /// <field name="mot_nid_cpn" type="String">
        /// Gets or sets the mot_nid_cpn for this child.
        /// </field>
        /// <field name="dob" type="Date">
        /// Gets or sets the dob for this child.
        /// </field>
        /// <field name="ccrs" type="msls.EntityCollection" elementType="msls.application.ccr">
        /// Gets the ccrs for this child.
        /// </field>
        /// <field name="details" type="msls.application.child.Details">
        /// Gets the details for this child.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function cpn_final(entitySet) {
        /// <summary>
        /// Represents the cpn_final entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this cpn_final.
        /// </param>
        /// <field name="id" type="String">
        /// Gets or sets the id for this cpn_final.
        /// </field>
        /// <field name="idmother" type="String">
        /// Gets or sets the idmother for this cpn_final.
        /// </field>
        /// <field name="nlivro" type="String">
        /// Gets or sets the nlivro for this cpn_final.
        /// </field>
        /// <field name="cons_more4" type="Boolean">
        /// Gets or sets the cons_more4 for this cpn_final.
        /// </field>
        /// <field name="partnerpreence" type="Boolean">
        /// Gets or sets the partnerpreence for this cpn_final.
        /// </field>
        /// <field name="weightgainyno" type="String">
        /// Gets or sets the weightgainyno for this cpn_final.
        /// </field>
        /// <field name="dag" type="Boolean">
        /// Gets or sets the dag for this cpn_final.
        /// </field>
        /// <field name="dam" type="Boolean">
        /// Gets or sets the dam for this cpn_final.
        /// </field>
        /// <field name="supnutr" type="String">
        /// Gets or sets the supnutr for this cpn_final.
        /// </field>
        /// <field name="resultcured" type="String">
        /// Gets or sets the resultcured for this cpn_final.
        /// </field>
        /// <field name="resultabandon" type="String">
        /// Gets or sets the resultabandon for this cpn_final.
        /// </field>
        /// <field name="receiveddesparasitante" type="String">
        /// Gets or sets the receiveddesparasitante for this cpn_final.
        /// </field>
        /// <field name="salferr_more3" type="Boolean">
        /// Gets or sets the salferr_more3 for this cpn_final.
        /// </field>
        /// <field name="its_diag" type="Boolean">
        /// Gets or sets the its_diag for this cpn_final.
        /// </field>
        /// <field name="its_treatment" type="String">
        /// Gets or sets the its_treatment for this cpn_final.
        /// </field>
        /// <field name="its_syphilistesting" type="String">
        /// Gets or sets the its_syphilistesting for this cpn_final.
        /// </field>
        /// <field name="its_wsyphilistreat" type="Boolean">
        /// Gets or sets the its_wsyphilistreat for this cpn_final.
        /// </field>
        /// <field name="its_psyphilistreat" type="String">
        /// Gets or sets the its_psyphilistreat for this cpn_final.
        /// </field>
        /// <field name="womanserostatus" type="String">
        /// Gets or sets the womanserostatus for this cpn_final.
        /// </field>
        /// <field name="partnerserostatus" type="String">
        /// Gets or sets the partnerserostatus for this cpn_final.
        /// </field>
        /// <field name="ctz_entr" type="Boolean">
        /// Gets or sets the ctz_entr for this cpn_final.
        /// </field>
        /// <field name="ctz_init" type="Boolean">
        /// Gets or sets the ctz_init for this cpn_final.
        /// </field>
        /// <field name="finalresult_arv" type="String">
        /// Gets or sets the finalresult_arv for this cpn_final.
        /// </field>
        /// <field name="tip" type="String">
        /// Gets or sets the tip for this cpn_final.
        /// </field>
        /// <field name="bednet" type="String">
        /// Gets or sets the bednet for this cpn_final.
        /// </field>
        /// <field name="mal_diag_lab" type="String">
        /// Gets or sets the mal_diag_lab for this cpn_final.
        /// </field>
        /// <field name="mal_treatment" type="String">
        /// Gets or sets the mal_treatment for this cpn_final.
        /// </field>
        /// <field name="mp" type="String">
        /// Gets or sets the mp for this cpn_final.
        /// </field>
        /// <field name="vat_1_dose" type="Boolean">
        /// Gets or sets the vat_1_dose for this cpn_final.
        /// </field>
        /// <field name="vat_2_5_dose" type="Boolean">
        /// Gets or sets the vat_2_5_dose for this cpn_final.
        /// </field>
        /// <field name="tb_isoniazid" type="Boolean">
        /// Gets or sets the tb_isoniazid for this cpn_final.
        /// </field>
        /// <field name="tb_treatment" type="Boolean">
        /// Gets or sets the tb_treatment for this cpn_final.
        /// </field>
        /// <field name="details" type="msls.application.cpn_final.Details">
        /// Gets the details for this cpn_final.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function cpn_old(entitySet) {
        /// <summary>
        /// Represents the cpn_old entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this cpn_old.
        /// </param>
        /// <field name="id" type="String">
        /// Gets or sets the id for this cpn_old.
        /// </field>
        /// <field name="nyear" type="Number">
        /// Gets or sets the nyear for this cpn_old.
        /// </field>
        /// <field name="visdate1" type="Date">
        /// Gets or sets the visdate1 for this cpn_old.
        /// </field>
        /// <field name="visdate2" type="Date">
        /// Gets or sets the visdate2 for this cpn_old.
        /// </field>
        /// <field name="visdate3" type="Date">
        /// Gets or sets the visdate3 for this cpn_old.
        /// </field>
        /// <field name="visdate4" type="Date">
        /// Gets or sets the visdate4 for this cpn_old.
        /// </field>
        /// <field name="visdate5" type="Date">
        /// Gets or sets the visdate5 for this cpn_old.
        /// </field>
        /// <field name="visdate6" type="Date">
        /// Gets or sets the visdate6 for this cpn_old.
        /// </field>
        /// <field name="nid_cpn" type="String">
        /// Gets or sets the nid_cpn for this cpn_old.
        /// </field>
        /// <field name="nid_tarv" type="String">
        /// Gets or sets the nid_tarv for this cpn_old.
        /// </field>
        /// <field name="name" type="String">
        /// Gets or sets the name for this cpn_old.
        /// </field>
        /// <field name="residence" type="String">
        /// Gets or sets the residence for this cpn_old.
        /// </field>
        /// <field name="phone" type="String">
        /// Gets or sets the phone for this cpn_old.
        /// </field>
        /// <field name="agegroup1" type="Boolean">
        /// Gets or sets the agegroup1 for this cpn_old.
        /// </field>
        /// <field name="agegroup2" type="Boolean">
        /// Gets or sets the agegroup2 for this cpn_old.
        /// </field>
        /// <field name="agegroup3" type="Boolean">
        /// Gets or sets the agegroup3 for this cpn_old.
        /// </field>
        /// <field name="agegroup4" type="Boolean">
        /// Gets or sets the agegroup4 for this cpn_old.
        /// </field>
        /// <field name="gestationalage1" type="Number">
        /// Gets or sets the gestationalage1 for this cpn_old.
        /// </field>
        /// <field name="gestationalage2" type="Number">
        /// Gets or sets the gestationalage2 for this cpn_old.
        /// </field>
        /// <field name="gestationalage3" type="Number">
        /// Gets or sets the gestationalage3 for this cpn_old.
        /// </field>
        /// <field name="gestationalage4" type="Number">
        /// Gets or sets the gestationalage4 for this cpn_old.
        /// </field>
        /// <field name="gestationalage5" type="Number">
        /// Gets or sets the gestationalage5 for this cpn_old.
        /// </field>
        /// <field name="gestationalage6" type="Number">
        /// Gets or sets the gestationalage6 for this cpn_old.
        /// </field>
        /// <field name="gageless12" type="Boolean">
        /// Gets or sets the gageless12 for this cpn_old.
        /// </field>
        /// <field name="partnerpresence1" type="Boolean">
        /// Gets or sets the partnerpresence1 for this cpn_old.
        /// </field>
        /// <field name="partnerpresence2" type="Boolean">
        /// Gets or sets the partnerpresence2 for this cpn_old.
        /// </field>
        /// <field name="partnerpresence3" type="Boolean">
        /// Gets or sets the partnerpresence3 for this cpn_old.
        /// </field>
        /// <field name="partnerpresence4" type="Boolean">
        /// Gets or sets the partnerpresence4 for this cpn_old.
        /// </field>
        /// <field name="partnerpresence5" type="Boolean">
        /// Gets or sets the partnerpresence5 for this cpn_old.
        /// </field>
        /// <field name="partnerpresence6" type="Boolean">
        /// Gets or sets the partnerpresence6 for this cpn_old.
        /// </field>
        /// <field name="weight1" type="Number">
        /// Gets or sets the weight1 for this cpn_old.
        /// </field>
        /// <field name="weight2" type="Number">
        /// Gets or sets the weight2 for this cpn_old.
        /// </field>
        /// <field name="weight3" type="Number">
        /// Gets or sets the weight3 for this cpn_old.
        /// </field>
        /// <field name="weight4" type="Number">
        /// Gets or sets the weight4 for this cpn_old.
        /// </field>
        /// <field name="weight5" type="Number">
        /// Gets or sets the weight5 for this cpn_old.
        /// </field>
        /// <field name="weight6" type="Number">
        /// Gets or sets the weight6 for this cpn_old.
        /// </field>
        /// <field name="weightgainyno2" type="String">
        /// Gets or sets the weightgainyno2 for this cpn_old.
        /// </field>
        /// <field name="weightgainyno3" type="String">
        /// Gets or sets the weightgainyno3 for this cpn_old.
        /// </field>
        /// <field name="weightgainyno4" type="String">
        /// Gets or sets the weightgainyno4 for this cpn_old.
        /// </field>
        /// <field name="weightgainyno5" type="String">
        /// Gets or sets the weightgainyno5 for this cpn_old.
        /// </field>
        /// <field name="weightgainyno6" type="String">
        /// Gets or sets the weightgainyno6 for this cpn_old.
        /// </field>
        /// <field name="dag1" type="Boolean">
        /// Gets or sets the dag1 for this cpn_old.
        /// </field>
        /// <field name="dag2" type="Boolean">
        /// Gets or sets the dag2 for this cpn_old.
        /// </field>
        /// <field name="dag3" type="Boolean">
        /// Gets or sets the dag3 for this cpn_old.
        /// </field>
        /// <field name="dag4" type="Boolean">
        /// Gets or sets the dag4 for this cpn_old.
        /// </field>
        /// <field name="dag5" type="Boolean">
        /// Gets or sets the dag5 for this cpn_old.
        /// </field>
        /// <field name="dag6" type="Boolean">
        /// Gets or sets the dag6 for this cpn_old.
        /// </field>
        /// <field name="dam1" type="Boolean">
        /// Gets or sets the dam1 for this cpn_old.
        /// </field>
        /// <field name="dam2" type="Boolean">
        /// Gets or sets the dam2 for this cpn_old.
        /// </field>
        /// <field name="dam3" type="Boolean">
        /// Gets or sets the dam3 for this cpn_old.
        /// </field>
        /// <field name="dam4" type="Boolean">
        /// Gets or sets the dam4 for this cpn_old.
        /// </field>
        /// <field name="dam5" type="Boolean">
        /// Gets or sets the dam5 for this cpn_old.
        /// </field>
        /// <field name="dam6" type="Boolean">
        /// Gets or sets the dam6 for this cpn_old.
        /// </field>
        /// <field name="supnutr1" type="Number">
        /// Gets or sets the supnutr1 for this cpn_old.
        /// </field>
        /// <field name="supnutr2" type="Number">
        /// Gets or sets the supnutr2 for this cpn_old.
        /// </field>
        /// <field name="supnutr3" type="Number">
        /// Gets or sets the supnutr3 for this cpn_old.
        /// </field>
        /// <field name="supnutr4" type="Number">
        /// Gets or sets the supnutr4 for this cpn_old.
        /// </field>
        /// <field name="supnutr5" type="Number">
        /// Gets or sets the supnutr5 for this cpn_old.
        /// </field>
        /// <field name="supnutr6" type="Number">
        /// Gets or sets the supnutr6 for this cpn_old.
        /// </field>
        /// <field name="resultcured2" type="String">
        /// Gets or sets the resultcured2 for this cpn_old.
        /// </field>
        /// <field name="resultcured3" type="String">
        /// Gets or sets the resultcured3 for this cpn_old.
        /// </field>
        /// <field name="resultcured4" type="String">
        /// Gets or sets the resultcured4 for this cpn_old.
        /// </field>
        /// <field name="resultcured5" type="String">
        /// Gets or sets the resultcured5 for this cpn_old.
        /// </field>
        /// <field name="resultcured6" type="String">
        /// Gets or sets the resultcured6 for this cpn_old.
        /// </field>
        /// <field name="resultabandon2" type="String">
        /// Gets or sets the resultabandon2 for this cpn_old.
        /// </field>
        /// <field name="resultabandon3" type="String">
        /// Gets or sets the resultabandon3 for this cpn_old.
        /// </field>
        /// <field name="resultabandon4" type="String">
        /// Gets or sets the resultabandon4 for this cpn_old.
        /// </field>
        /// <field name="resultabandon5" type="String">
        /// Gets or sets the resultabandon5 for this cpn_old.
        /// </field>
        /// <field name="resultabandon6" type="String">
        /// Gets or sets the resultabandon6 for this cpn_old.
        /// </field>
        /// <field name="receiveddesparasitante1" type="String">
        /// Gets or sets the receiveddesparasitante1 for this cpn_old.
        /// </field>
        /// <field name="receiveddesparasitante2" type="String">
        /// Gets or sets the receiveddesparasitante2 for this cpn_old.
        /// </field>
        /// <field name="receiveddesparasitante3" type="String">
        /// Gets or sets the receiveddesparasitante3 for this cpn_old.
        /// </field>
        /// <field name="receiveddesparasitante4" type="String">
        /// Gets or sets the receiveddesparasitante4 for this cpn_old.
        /// </field>
        /// <field name="receiveddesparasitante5" type="String">
        /// Gets or sets the receiveddesparasitante5 for this cpn_old.
        /// </field>
        /// <field name="receiveddesparasitante6" type="String">
        /// Gets or sets the receiveddesparasitante6 for this cpn_old.
        /// </field>
        /// <field name="salferr_acfolico1" type="String">
        /// Gets or sets the salferr_acfolico1 for this cpn_old.
        /// </field>
        /// <field name="salferr_acfolico2" type="String">
        /// Gets or sets the salferr_acfolico2 for this cpn_old.
        /// </field>
        /// <field name="salferr_acfolico3" type="String">
        /// Gets or sets the salferr_acfolico3 for this cpn_old.
        /// </field>
        /// <field name="salferr_acfolico4" type="String">
        /// Gets or sets the salferr_acfolico4 for this cpn_old.
        /// </field>
        /// <field name="salferr_acfolico5" type="String">
        /// Gets or sets the salferr_acfolico5 for this cpn_old.
        /// </field>
        /// <field name="salferr_acfolico6" type="String">
        /// Gets or sets the salferr_acfolico6 for this cpn_old.
        /// </field>
        /// <field name="ta1" type="String">
        /// Gets or sets the ta1 for this cpn_old.
        /// </field>
        /// <field name="ta2" type="String">
        /// Gets or sets the ta2 for this cpn_old.
        /// </field>
        /// <field name="ta3" type="String">
        /// Gets or sets the ta3 for this cpn_old.
        /// </field>
        /// <field name="ta4" type="String">
        /// Gets or sets the ta4 for this cpn_old.
        /// </field>
        /// <field name="ta5" type="String">
        /// Gets or sets the ta5 for this cpn_old.
        /// </field>
        /// <field name="ta6" type="String">
        /// Gets or sets the ta6 for this cpn_old.
        /// </field>
        /// <field name="hgb1" type="String">
        /// Gets or sets the hgb1 for this cpn_old.
        /// </field>
        /// <field name="hgb2" type="String">
        /// Gets or sets the hgb2 for this cpn_old.
        /// </field>
        /// <field name="hgb3" type="String">
        /// Gets or sets the hgb3 for this cpn_old.
        /// </field>
        /// <field name="hgb4" type="String">
        /// Gets or sets the hgb4 for this cpn_old.
        /// </field>
        /// <field name="hgb5" type="String">
        /// Gets or sets the hgb5 for this cpn_old.
        /// </field>
        /// <field name="hgb6" type="String">
        /// Gets or sets the hgb6 for this cpn_old.
        /// </field>
        /// <field name="proteinuria1" type="String">
        /// Gets or sets the proteinuria1 for this cpn_old.
        /// </field>
        /// <field name="proteinuria2" type="String">
        /// Gets or sets the proteinuria2 for this cpn_old.
        /// </field>
        /// <field name="proteinuria3" type="String">
        /// Gets or sets the proteinuria3 for this cpn_old.
        /// </field>
        /// <field name="proteinuria4" type="String">
        /// Gets or sets the proteinuria4 for this cpn_old.
        /// </field>
        /// <field name="proteinuria5" type="String">
        /// Gets or sets the proteinuria5 for this cpn_old.
        /// </field>
        /// <field name="proteinuria6" type="String">
        /// Gets or sets the proteinuria6 for this cpn_old.
        /// </field>
        /// <field name="glicosuria1" type="String">
        /// Gets or sets the glicosuria1 for this cpn_old.
        /// </field>
        /// <field name="glicosuria2" type="String">
        /// Gets or sets the glicosuria2 for this cpn_old.
        /// </field>
        /// <field name="glicosuria3" type="String">
        /// Gets or sets the glicosuria3 for this cpn_old.
        /// </field>
        /// <field name="glicosuria4" type="String">
        /// Gets or sets the glicosuria4 for this cpn_old.
        /// </field>
        /// <field name="glicosuria5" type="String">
        /// Gets or sets the glicosuria5 for this cpn_old.
        /// </field>
        /// <field name="glicosuria6" type="String">
        /// Gets or sets the glicosuria6 for this cpn_old.
        /// </field>
        /// <field name="its_ulceragenital1" type="Boolean">
        /// Gets or sets the its_ulceragenital1 for this cpn_old.
        /// </field>
        /// <field name="its_ulceragenital2" type="Boolean">
        /// Gets or sets the its_ulceragenital2 for this cpn_old.
        /// </field>
        /// <field name="its_ulceragenital3" type="Boolean">
        /// Gets or sets the its_ulceragenital3 for this cpn_old.
        /// </field>
        /// <field name="its_ulceragenital4" type="Boolean">
        /// Gets or sets the its_ulceragenital4 for this cpn_old.
        /// </field>
        /// <field name="its_ulceragenital5" type="Boolean">
        /// Gets or sets the its_ulceragenital5 for this cpn_old.
        /// </field>
        /// <field name="its_ulceragenital6" type="Boolean">
        /// Gets or sets the its_ulceragenital6 for this cpn_old.
        /// </field>
        /// <field name="its_leucorreia1" type="Boolean">
        /// Gets or sets the its_leucorreia1 for this cpn_old.
        /// </field>
        /// <field name="its_leucorreia2" type="Boolean">
        /// Gets or sets the its_leucorreia2 for this cpn_old.
        /// </field>
        /// <field name="its_leucorreia3" type="Boolean">
        /// Gets or sets the its_leucorreia3 for this cpn_old.
        /// </field>
        /// <field name="its_leucorreia4" type="Boolean">
        /// Gets or sets the its_leucorreia4 for this cpn_old.
        /// </field>
        /// <field name="its_leucorreia5" type="Boolean">
        /// Gets or sets the its_leucorreia5 for this cpn_old.
        /// </field>
        /// <field name="its_leucorreia6" type="Boolean">
        /// Gets or sets the its_leucorreia6 for this cpn_old.
        /// </field>
        /// <field name="its_syndromictreatment1" type="String">
        /// Gets or sets the its_syndromictreatment1 for this cpn_old.
        /// </field>
        /// <field name="its_syndromictreatment2" type="String">
        /// Gets or sets the its_syndromictreatment2 for this cpn_old.
        /// </field>
        /// <field name="its_syndromictreatment3" type="String">
        /// Gets or sets the its_syndromictreatment3 for this cpn_old.
        /// </field>
        /// <field name="its_syndromictreatment4" type="String">
        /// Gets or sets the its_syndromictreatment4 for this cpn_old.
        /// </field>
        /// <field name="its_syndromictreatment5" type="String">
        /// Gets or sets the its_syndromictreatment5 for this cpn_old.
        /// </field>
        /// <field name="its_syndromictreatment6" type="String">
        /// Gets or sets the its_syndromictreatment6 for this cpn_old.
        /// </field>
        /// <field name="its_syphilistesting1" type="String">
        /// Gets or sets the its_syphilistesting1 for this cpn_old.
        /// </field>
        /// <field name="its_syphilistesting2" type="String">
        /// Gets or sets the its_syphilistesting2 for this cpn_old.
        /// </field>
        /// <field name="its_syphilistesting3" type="String">
        /// Gets or sets the its_syphilistesting3 for this cpn_old.
        /// </field>
        /// <field name="its_syphilistesting4" type="String">
        /// Gets or sets the its_syphilistesting4 for this cpn_old.
        /// </field>
        /// <field name="its_syphilistesting5" type="String">
        /// Gets or sets the its_syphilistesting5 for this cpn_old.
        /// </field>
        /// <field name="its_syphilistesting6" type="String">
        /// Gets or sets the its_syphilistesting6 for this cpn_old.
        /// </field>
        /// <field name="its_wsyphilistreat1" type="String">
        /// Gets or sets the its_wsyphilistreat1 for this cpn_old.
        /// </field>
        /// <field name="its_wsyphilistreat2" type="String">
        /// Gets or sets the its_wsyphilistreat2 for this cpn_old.
        /// </field>
        /// <field name="its_wsyphilistreat3" type="String">
        /// Gets or sets the its_wsyphilistreat3 for this cpn_old.
        /// </field>
        /// <field name="its_wsyphilistreat4" type="String">
        /// Gets or sets the its_wsyphilistreat4 for this cpn_old.
        /// </field>
        /// <field name="its_wsyphilistreat5" type="String">
        /// Gets or sets the its_wsyphilistreat5 for this cpn_old.
        /// </field>
        /// <field name="its_wsyphilistreat6" type="String">
        /// Gets or sets the its_wsyphilistreat6 for this cpn_old.
        /// </field>
        /// <field name="its_psyphilistreat1" type="String">
        /// Gets or sets the its_psyphilistreat1 for this cpn_old.
        /// </field>
        /// <field name="its_psyphilistreat2" type="String">
        /// Gets or sets the its_psyphilistreat2 for this cpn_old.
        /// </field>
        /// <field name="its_psyphilistreat3" type="String">
        /// Gets or sets the its_psyphilistreat3 for this cpn_old.
        /// </field>
        /// <field name="its_psyphilistreat4" type="String">
        /// Gets or sets the its_psyphilistreat4 for this cpn_old.
        /// </field>
        /// <field name="its_psyphilistreat5" type="String">
        /// Gets or sets the its_psyphilistreat5 for this cpn_old.
        /// </field>
        /// <field name="its_psyphilistreat6" type="String">
        /// Gets or sets the its_psyphilistreat6 for this cpn_old.
        /// </field>
        /// <field name="serostatusdesc" type="Boolean">
        /// Gets or sets the serostatusdesc for this cpn_old.
        /// </field>
        /// <field name="serostatusneg" type="Boolean">
        /// Gets or sets the serostatusneg for this cpn_old.
        /// </field>
        /// <field name="serostatuspos" type="Boolean">
        /// Gets or sets the serostatuspos for this cpn_old.
        /// </field>
        /// <field name="cpnhivtest1" type="String">
        /// Gets or sets the cpnhivtest1 for this cpn_old.
        /// </field>
        /// <field name="cpnhivtest2" type="String">
        /// Gets or sets the cpnhivtest2 for this cpn_old.
        /// </field>
        /// <field name="cpnhivtest3" type="String">
        /// Gets or sets the cpnhivtest3 for this cpn_old.
        /// </field>
        /// <field name="cpnhivtest4" type="String">
        /// Gets or sets the cpnhivtest4 for this cpn_old.
        /// </field>
        /// <field name="cpnhivtest5" type="String">
        /// Gets or sets the cpnhivtest5 for this cpn_old.
        /// </field>
        /// <field name="cpnhivtest6" type="String">
        /// Gets or sets the cpnhivtest6 for this cpn_old.
        /// </field>
        /// <field name="partnerhivtest1" type="String">
        /// Gets or sets the partnerhivtest1 for this cpn_old.
        /// </field>
        /// <field name="partnerhivtest2" type="String">
        /// Gets or sets the partnerhivtest2 for this cpn_old.
        /// </field>
        /// <field name="partnerhivtest3" type="String">
        /// Gets or sets the partnerhivtest3 for this cpn_old.
        /// </field>
        /// <field name="partnerhivtest4" type="String">
        /// Gets or sets the partnerhivtest4 for this cpn_old.
        /// </field>
        /// <field name="partnerhivtest5" type="String">
        /// Gets or sets the partnerhivtest5 for this cpn_old.
        /// </field>
        /// <field name="partnerhivtest6" type="String">
        /// Gets or sets the partnerhivtest6 for this cpn_old.
        /// </field>
        /// <field name="ctz" type="Boolean">
        /// Gets or sets the ctz for this cpn_old.
        /// </field>
        /// <field name="ctz_init_cont1" type="String">
        /// Gets or sets the ctz_init_cont1 for this cpn_old.
        /// </field>
        /// <field name="ctz_init_cont2" type="String">
        /// Gets or sets the ctz_init_cont2 for this cpn_old.
        /// </field>
        /// <field name="ctz_init_cont3" type="String">
        /// Gets or sets the ctz_init_cont3 for this cpn_old.
        /// </field>
        /// <field name="ctz_init_cont4" type="String">
        /// Gets or sets the ctz_init_cont4 for this cpn_old.
        /// </field>
        /// <field name="ctz_init_cont5" type="String">
        /// Gets or sets the ctz_init_cont5 for this cpn_old.
        /// </field>
        /// <field name="ctz_init_cont6" type="String">
        /// Gets or sets the ctz_init_cont6 for this cpn_old.
        /// </field>
        /// <field name="tarv" type="Boolean">
        /// Gets or sets the tarv for this cpn_old.
        /// </field>
        /// <field name="nvp1" type="Boolean">
        /// Gets or sets the nvp1 for this cpn_old.
        /// </field>
        /// <field name="nvp2" type="Boolean">
        /// Gets or sets the nvp2 for this cpn_old.
        /// </field>
        /// <field name="nvp3" type="Boolean">
        /// Gets or sets the nvp3 for this cpn_old.
        /// </field>
        /// <field name="nvp4" type="Boolean">
        /// Gets or sets the nvp4 for this cpn_old.
        /// </field>
        /// <field name="nvp5" type="Boolean">
        /// Gets or sets the nvp5 for this cpn_old.
        /// </field>
        /// <field name="nvp6" type="Boolean">
        /// Gets or sets the nvp6 for this cpn_old.
        /// </field>
        /// <field name="azt_nvp1" type="Boolean">
        /// Gets or sets the azt_nvp1 for this cpn_old.
        /// </field>
        /// <field name="azt_nvp2" type="Boolean">
        /// Gets or sets the azt_nvp2 for this cpn_old.
        /// </field>
        /// <field name="azt_nvp3" type="Boolean">
        /// Gets or sets the azt_nvp3 for this cpn_old.
        /// </field>
        /// <field name="azt_nvp4" type="Boolean">
        /// Gets or sets the azt_nvp4 for this cpn_old.
        /// </field>
        /// <field name="azt_nvp5" type="Boolean">
        /// Gets or sets the azt_nvp5 for this cpn_old.
        /// </field>
        /// <field name="azt_nvp6" type="Boolean">
        /// Gets or sets the azt_nvp6 for this cpn_old.
        /// </field>
        /// <field name="tarv_init_visit1" type="Boolean">
        /// Gets or sets the tarv_init_visit1 for this cpn_old.
        /// </field>
        /// <field name="tarv_init_visit2" type="Boolean">
        /// Gets or sets the tarv_init_visit2 for this cpn_old.
        /// </field>
        /// <field name="tarv_init_visit3" type="Boolean">
        /// Gets or sets the tarv_init_visit3 for this cpn_old.
        /// </field>
        /// <field name="tarv_init_visit4" type="Boolean">
        /// Gets or sets the tarv_init_visit4 for this cpn_old.
        /// </field>
        /// <field name="tarv_init_visit5" type="Boolean">
        /// Gets or sets the tarv_init_visit5 for this cpn_old.
        /// </field>
        /// <field name="tarv_init_visit6" type="Boolean">
        /// Gets or sets the tarv_init_visit6 for this cpn_old.
        /// </field>
        /// <field name="arv_cont2" type="Boolean">
        /// Gets or sets the arv_cont2 for this cpn_old.
        /// </field>
        /// <field name="arv_cont3" type="Boolean">
        /// Gets or sets the arv_cont3 for this cpn_old.
        /// </field>
        /// <field name="arv_cont4" type="Boolean">
        /// Gets or sets the arv_cont4 for this cpn_old.
        /// </field>
        /// <field name="arv_cont5" type="Boolean">
        /// Gets or sets the arv_cont5 for this cpn_old.
        /// </field>
        /// <field name="arv_cont6" type="Boolean">
        /// Gets or sets the arv_cont6 for this cpn_old.
        /// </field>
        /// <field name="tip1" type="String">
        /// Gets or sets the tip1 for this cpn_old.
        /// </field>
        /// <field name="tip2" type="String">
        /// Gets or sets the tip2 for this cpn_old.
        /// </field>
        /// <field name="tip3" type="String">
        /// Gets or sets the tip3 for this cpn_old.
        /// </field>
        /// <field name="tip4" type="String">
        /// Gets or sets the tip4 for this cpn_old.
        /// </field>
        /// <field name="tip5" type="String">
        /// Gets or sets the tip5 for this cpn_old.
        /// </field>
        /// <field name="tip6" type="String">
        /// Gets or sets the tip6 for this cpn_old.
        /// </field>
        /// <field name="bednet1" type="String">
        /// Gets or sets the bednet1 for this cpn_old.
        /// </field>
        /// <field name="bednet2" type="String">
        /// Gets or sets the bednet2 for this cpn_old.
        /// </field>
        /// <field name="bednet3" type="String">
        /// Gets or sets the bednet3 for this cpn_old.
        /// </field>
        /// <field name="bednet4" type="String">
        /// Gets or sets the bednet4 for this cpn_old.
        /// </field>
        /// <field name="bednet5" type="String">
        /// Gets or sets the bednet5 for this cpn_old.
        /// </field>
        /// <field name="bednet6" type="String">
        /// Gets or sets the bednet6 for this cpn_old.
        /// </field>
        /// <field name="tdr_htz1" type="String">
        /// Gets or sets the tdr_htz1 for this cpn_old.
        /// </field>
        /// <field name="tdr_htz2" type="String">
        /// Gets or sets the tdr_htz2 for this cpn_old.
        /// </field>
        /// <field name="tdr_htz3" type="String">
        /// Gets or sets the tdr_htz3 for this cpn_old.
        /// </field>
        /// <field name="tdr_htz4" type="String">
        /// Gets or sets the tdr_htz4 for this cpn_old.
        /// </field>
        /// <field name="tdr_htz5" type="String">
        /// Gets or sets the tdr_htz5 for this cpn_old.
        /// </field>
        /// <field name="tdr_htz6" type="String">
        /// Gets or sets the tdr_htz6 for this cpn_old.
        /// </field>
        /// <field name="result_tdr_htz1" type="String">
        /// Gets or sets the result_tdr_htz1 for this cpn_old.
        /// </field>
        /// <field name="result_tdr_htz2" type="String">
        /// Gets or sets the result_tdr_htz2 for this cpn_old.
        /// </field>
        /// <field name="result_tdr_htz3" type="String">
        /// Gets or sets the result_tdr_htz3 for this cpn_old.
        /// </field>
        /// <field name="result_tdr_htz4" type="String">
        /// Gets or sets the result_tdr_htz4 for this cpn_old.
        /// </field>
        /// <field name="result_tdr_htz5" type="String">
        /// Gets or sets the result_tdr_htz5 for this cpn_old.
        /// </field>
        /// <field name="result_tdr_htz6" type="String">
        /// Gets or sets the result_tdr_htz6 for this cpn_old.
        /// </field>
        /// <field name="pos_malaria_treated1" type="String">
        /// Gets or sets the pos_malaria_treated1 for this cpn_old.
        /// </field>
        /// <field name="pos_malaria_treated2" type="String">
        /// Gets or sets the pos_malaria_treated2 for this cpn_old.
        /// </field>
        /// <field name="pos_malaria_treated3" type="String">
        /// Gets or sets the pos_malaria_treated3 for this cpn_old.
        /// </field>
        /// <field name="pos_malaria_treated4" type="String">
        /// Gets or sets the pos_malaria_treated4 for this cpn_old.
        /// </field>
        /// <field name="pos_malaria_treated5" type="String">
        /// Gets or sets the pos_malaria_treated5 for this cpn_old.
        /// </field>
        /// <field name="pos_malaria_treated6" type="String">
        /// Gets or sets the pos_malaria_treated6 for this cpn_old.
        /// </field>
        /// <field name="hpp1" type="String">
        /// Gets or sets the hpp1 for this cpn_old.
        /// </field>
        /// <field name="hpp2" type="String">
        /// Gets or sets the hpp2 for this cpn_old.
        /// </field>
        /// <field name="hpp3" type="String">
        /// Gets or sets the hpp3 for this cpn_old.
        /// </field>
        /// <field name="hpp4" type="String">
        /// Gets or sets the hpp4 for this cpn_old.
        /// </field>
        /// <field name="hpp5" type="String">
        /// Gets or sets the hpp5 for this cpn_old.
        /// </field>
        /// <field name="hpp6" type="String">
        /// Gets or sets the hpp6 for this cpn_old.
        /// </field>
        /// <field name="vat_1_dose1" type="Boolean">
        /// Gets or sets the vat_1_dose1 for this cpn_old.
        /// </field>
        /// <field name="vat_1_dose2" type="Boolean">
        /// Gets or sets the vat_1_dose2 for this cpn_old.
        /// </field>
        /// <field name="vat_1_dose3" type="Boolean">
        /// Gets or sets the vat_1_dose3 for this cpn_old.
        /// </field>
        /// <field name="vat_1_dose4" type="Boolean">
        /// Gets or sets the vat_1_dose4 for this cpn_old.
        /// </field>
        /// <field name="vat_1_dose5" type="Boolean">
        /// Gets or sets the vat_1_dose5 for this cpn_old.
        /// </field>
        /// <field name="vat_1_dose6" type="Boolean">
        /// Gets or sets the vat_1_dose6 for this cpn_old.
        /// </field>
        /// <field name="vat_2_5_dose1" type="Boolean">
        /// Gets or sets the vat_2_5_dose1 for this cpn_old.
        /// </field>
        /// <field name="vat_2_5_dose2" type="Boolean">
        /// Gets or sets the vat_2_5_dose2 for this cpn_old.
        /// </field>
        /// <field name="vat_2_5_dose3" type="Boolean">
        /// Gets or sets the vat_2_5_dose3 for this cpn_old.
        /// </field>
        /// <field name="vat_2_5_dose4" type="Boolean">
        /// Gets or sets the vat_2_5_dose4 for this cpn_old.
        /// </field>
        /// <field name="vat_2_5_dose5" type="Boolean">
        /// Gets or sets the vat_2_5_dose5 for this cpn_old.
        /// </field>
        /// <field name="vat_2_5_dose6" type="Boolean">
        /// Gets or sets the vat_2_5_dose6 for this cpn_old.
        /// </field>
        /// <field name="tb_isoniazid1" type="String">
        /// Gets or sets the tb_isoniazid1 for this cpn_old.
        /// </field>
        /// <field name="tb_isoniazid2" type="String">
        /// Gets or sets the tb_isoniazid2 for this cpn_old.
        /// </field>
        /// <field name="tb_isoniazid3" type="String">
        /// Gets or sets the tb_isoniazid3 for this cpn_old.
        /// </field>
        /// <field name="tb_isoniazid4" type="String">
        /// Gets or sets the tb_isoniazid4 for this cpn_old.
        /// </field>
        /// <field name="tb_isoniazid5" type="String">
        /// Gets or sets the tb_isoniazid5 for this cpn_old.
        /// </field>
        /// <field name="tb_isoniazid6" type="String">
        /// Gets or sets the tb_isoniazid6 for this cpn_old.
        /// </field>
        /// <field name="tb_treatment1" type="String">
        /// Gets or sets the tb_treatment1 for this cpn_old.
        /// </field>
        /// <field name="tb_treatment2" type="String">
        /// Gets or sets the tb_treatment2 for this cpn_old.
        /// </field>
        /// <field name="tb_treatment3" type="String">
        /// Gets or sets the tb_treatment3 for this cpn_old.
        /// </field>
        /// <field name="tb_treatment4" type="String">
        /// Gets or sets the tb_treatment4 for this cpn_old.
        /// </field>
        /// <field name="tb_treatment5" type="String">
        /// Gets or sets the tb_treatment5 for this cpn_old.
        /// </field>
        /// <field name="tb_treatment6" type="String">
        /// Gets or sets the tb_treatment6 for this cpn_old.
        /// </field>
        /// <field name="obs1" type="String">
        /// Gets or sets the obs1 for this cpn_old.
        /// </field>
        /// <field name="obs2" type="String">
        /// Gets or sets the obs2 for this cpn_old.
        /// </field>
        /// <field name="obs3" type="String">
        /// Gets or sets the obs3 for this cpn_old.
        /// </field>
        /// <field name="obs4" type="String">
        /// Gets or sets the obs4 for this cpn_old.
        /// </field>
        /// <field name="obs5" type="String">
        /// Gets or sets the obs5 for this cpn_old.
        /// </field>
        /// <field name="obs6" type="String">
        /// Gets or sets the obs6 for this cpn_old.
        /// </field>
        /// <field name="providername1" type="String">
        /// Gets or sets the providername1 for this cpn_old.
        /// </field>
        /// <field name="providername2" type="String">
        /// Gets or sets the providername2 for this cpn_old.
        /// </field>
        /// <field name="providername3" type="String">
        /// Gets or sets the providername3 for this cpn_old.
        /// </field>
        /// <field name="providername4" type="String">
        /// Gets or sets the providername4 for this cpn_old.
        /// </field>
        /// <field name="providername5" type="String">
        /// Gets or sets the providername5 for this cpn_old.
        /// </field>
        /// <field name="providername6" type="String">
        /// Gets or sets the providername6 for this cpn_old.
        /// </field>
        /// <field name="cons_more4" type="Boolean">
        /// Gets or sets the cons_more4 for this cpn_old.
        /// </field>
        /// <field name="partnerpreence" type="Boolean">
        /// Gets or sets the partnerpreence for this cpn_old.
        /// </field>
        /// <field name="weightgainyno" type="String">
        /// Gets or sets the weightgainyno for this cpn_old.
        /// </field>
        /// <field name="dag" type="Boolean">
        /// Gets or sets the dag for this cpn_old.
        /// </field>
        /// <field name="dam" type="Boolean">
        /// Gets or sets the dam for this cpn_old.
        /// </field>
        /// <field name="supnutr" type="String">
        /// Gets or sets the supnutr for this cpn_old.
        /// </field>
        /// <field name="resultcured" type="String">
        /// Gets or sets the resultcured for this cpn_old.
        /// </field>
        /// <field name="resultabandon" type="String">
        /// Gets or sets the resultabandon for this cpn_old.
        /// </field>
        /// <field name="receiveddesparasitante" type="String">
        /// Gets or sets the receiveddesparasitante for this cpn_old.
        /// </field>
        /// <field name="salferr_more3" type="Boolean">
        /// Gets or sets the salferr_more3 for this cpn_old.
        /// </field>
        /// <field name="its_diag" type="Boolean">
        /// Gets or sets the its_diag for this cpn_old.
        /// </field>
        /// <field name="its_treatment" type="String">
        /// Gets or sets the its_treatment for this cpn_old.
        /// </field>
        /// <field name="its_syphilistesting" type="String">
        /// Gets or sets the its_syphilistesting for this cpn_old.
        /// </field>
        /// <field name="its_wsyphilistreat" type="Boolean">
        /// Gets or sets the its_wsyphilistreat for this cpn_old.
        /// </field>
        /// <field name="its_psyphilistreat" type="String">
        /// Gets or sets the its_psyphilistreat for this cpn_old.
        /// </field>
        /// <field name="womanserostatus" type="String">
        /// Gets or sets the womanserostatus for this cpn_old.
        /// </field>
        /// <field name="partnerserostatus" type="String">
        /// Gets or sets the partnerserostatus for this cpn_old.
        /// </field>
        /// <field name="ctz_entr" type="Boolean">
        /// Gets or sets the ctz_entr for this cpn_old.
        /// </field>
        /// <field name="ctz_init" type="Boolean">
        /// Gets or sets the ctz_init for this cpn_old.
        /// </field>
        /// <field name="finalresult_arv" type="String">
        /// Gets or sets the finalresult_arv for this cpn_old.
        /// </field>
        /// <field name="tip" type="String">
        /// Gets or sets the tip for this cpn_old.
        /// </field>
        /// <field name="bednet" type="String">
        /// Gets or sets the bednet for this cpn_old.
        /// </field>
        /// <field name="mal_diag_lab" type="String">
        /// Gets or sets the mal_diag_lab for this cpn_old.
        /// </field>
        /// <field name="mal_treatment" type="String">
        /// Gets or sets the mal_treatment for this cpn_old.
        /// </field>
        /// <field name="mp" type="String">
        /// Gets or sets the mp for this cpn_old.
        /// </field>
        /// <field name="vat_1_dose" type="Boolean">
        /// Gets or sets the vat_1_dose for this cpn_old.
        /// </field>
        /// <field name="vat_2_5_dose" type="Boolean">
        /// Gets or sets the vat_2_5_dose for this cpn_old.
        /// </field>
        /// <field name="inh" type="Boolean">
        /// Gets or sets the inh for this cpn_old.
        /// </field>
        /// <field name="tb_initto" type="Boolean">
        /// Gets or sets the tb_initto for this cpn_old.
        /// </field>
        /// <field name="nlivro" type="String">
        /// Gets or sets the nlivro for this cpn_old.
        /// </field>
        /// <field name="idmother" type="String">
        /// Gets or sets the idmother for this cpn_old.
        /// </field>
        /// <field name="details" type="msls.application.cpn_old.Details">
        /// Gets the details for this cpn_old.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function cpn(entitySet) {
        /// <summary>
        /// Represents the cpn entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this cpn.
        /// </param>
        /// <field name="id" type="String">
        /// Gets or sets the id for this cpn.
        /// </field>
        /// <field name="nr_consulta" type="Number">
        /// Gets or sets the nr_consulta for this cpn.
        /// </field>
        /// <field name="idmother" type="String">
        /// Gets or sets the idmother for this cpn.
        /// </field>
        /// <field name="nlivro" type="String">
        /// Gets or sets the nlivro for this cpn.
        /// </field>
        /// <field name="nyear" type="Number">
        /// Gets or sets the nyear for this cpn.
        /// </field>
        /// <field name="visdate" type="Date">
        /// Gets or sets the visdate for this cpn.
        /// </field>
        /// <field name="agegroup" type="String">
        /// Gets or sets the agegroup for this cpn.
        /// </field>
        /// <field name="gestationalage" type="Number">
        /// Gets or sets the gestationalage for this cpn.
        /// </field>
        /// <field name="gageless12" type="Boolean">
        /// Gets or sets the gageless12 for this cpn.
        /// </field>
        /// <field name="partnerpresence" type="Boolean">
        /// Gets or sets the partnerpresence for this cpn.
        /// </field>
        /// <field name="weight" type="Number">
        /// Gets or sets the weight for this cpn.
        /// </field>
        /// <field name="weightgainyno" type="String">
        /// Gets or sets the weightgainyno for this cpn.
        /// </field>
        /// <field name="dag" type="Boolean">
        /// Gets or sets the dag for this cpn.
        /// </field>
        /// <field name="dam" type="Boolean">
        /// Gets or sets the dam for this cpn.
        /// </field>
        /// <field name="supnutr" type="Number">
        /// Gets or sets the supnutr for this cpn.
        /// </field>
        /// <field name="resultcured" type="String">
        /// Gets or sets the resultcured for this cpn.
        /// </field>
        /// <field name="resultabandon" type="String">
        /// Gets or sets the resultabandon for this cpn.
        /// </field>
        /// <field name="receiveddesparasitante" type="String">
        /// Gets or sets the receiveddesparasitante for this cpn.
        /// </field>
        /// <field name="salferr_acfolico" type="String">
        /// Gets or sets the salferr_acfolico for this cpn.
        /// </field>
        /// <field name="ta" type="String">
        /// Gets or sets the ta for this cpn.
        /// </field>
        /// <field name="hgb" type="String">
        /// Gets or sets the hgb for this cpn.
        /// </field>
        /// <field name="proteinuria" type="String">
        /// Gets or sets the proteinuria for this cpn.
        /// </field>
        /// <field name="glicosuria" type="String">
        /// Gets or sets the glicosuria for this cpn.
        /// </field>
        /// <field name="its_ulceragenital" type="Boolean">
        /// Gets or sets the its_ulceragenital for this cpn.
        /// </field>
        /// <field name="its_leucorreia" type="Boolean">
        /// Gets or sets the its_leucorreia for this cpn.
        /// </field>
        /// <field name="its_syndromictreatment" type="String">
        /// Gets or sets the its_syndromictreatment for this cpn.
        /// </field>
        /// <field name="its_syphilistesting" type="String">
        /// Gets or sets the its_syphilistesting for this cpn.
        /// </field>
        /// <field name="its_wsyphilistreat" type="String">
        /// Gets or sets the its_wsyphilistreat for this cpn.
        /// </field>
        /// <field name="its_psyphilistreat" type="String">
        /// Gets or sets the its_psyphilistreat for this cpn.
        /// </field>
        /// <field name="its_syphilistratmentmulhr" type="String">
        /// Gets or sets the its_syphilistratmentmulhr for this cpn.
        /// </field>
        /// <field name="its_syphilistratmentparceir" type="String">
        /// Gets or sets the its_syphilistratmentparceir for this cpn.
        /// </field>
        /// <field name="serostatusentcpn" type="String">
        /// Gets or sets the serostatusentcpn for this cpn.
        /// </field>
        /// <field name="cpnhivtest" type="String">
        /// Gets or sets the cpnhivtest for this cpn.
        /// </field>
        /// <field name="partnerhivtest" type="String">
        /// Gets or sets the partnerhivtest for this cpn.
        /// </field>
        /// <field name="ctz" type="Boolean">
        /// Gets or sets the ctz for this cpn.
        /// </field>
        /// <field name="ctz_init_cont" type="String">
        /// Gets or sets the ctz_init_cont for this cpn.
        /// </field>
        /// <field name="tarv" type="Boolean">
        /// Gets or sets the tarv for this cpn.
        /// </field>
        /// <field name="nvp" type="Boolean">
        /// Gets or sets the nvp for this cpn.
        /// </field>
        /// <field name="azt_nvp" type="Boolean">
        /// Gets or sets the azt_nvp for this cpn.
        /// </field>
        /// <field name="em_tarv_entrada" type="Boolean">
        /// Gets or sets the em_tarv_entrada for this cpn.
        /// </field>
        /// <field name="tarv_init_visit" type="Boolean">
        /// Gets or sets the tarv_init_visit for this cpn.
        /// </field>
        /// <field name="arv_cont" type="Boolean">
        /// Gets or sets the arv_cont for this cpn.
        /// </field>
        /// <field name="tip" type="String">
        /// Gets or sets the tip for this cpn.
        /// </field>
        /// <field name="bednet" type="String">
        /// Gets or sets the bednet for this cpn.
        /// </field>
        /// <field name="tdr_htz" type="String">
        /// Gets or sets the tdr_htz for this cpn.
        /// </field>
        /// <field name="result_tdr_htz" type="String">
        /// Gets or sets the result_tdr_htz for this cpn.
        /// </field>
        /// <field name="pos_malaria_treated" type="String">
        /// Gets or sets the pos_malaria_treated for this cpn.
        /// </field>
        /// <field name="hpp" type="String">
        /// Gets or sets the hpp for this cpn.
        /// </field>
        /// <field name="vat_1_dose" type="Boolean">
        /// Gets or sets the vat_1_dose for this cpn.
        /// </field>
        /// <field name="vat_2_5_dose" type="Boolean">
        /// Gets or sets the vat_2_5_dose for this cpn.
        /// </field>
        /// <field name="tb_isoniazid" type="String">
        /// Gets or sets the tb_isoniazid for this cpn.
        /// </field>
        /// <field name="tb_treatment" type="String">
        /// Gets or sets the tb_treatment for this cpn.
        /// </field>
        /// <field name="obs" type="String">
        /// Gets or sets the obs for this cpn.
        /// </field>
        /// <field name="providername" type="String">
        /// Gets or sets the providername for this cpn.
        /// </field>
        /// <field name="details" type="msls.application.cpn.Details">
        /// Gets the details for this cpn.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function cpp(entitySet) {
        /// <summary>
        /// Represents the cpp entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this cpp.
        /// </param>
        /// <field name="id" type="String">
        /// Gets or sets the id for this cpp.
        /// </field>
        /// <field name="nr_consulta" type="Number">
        /// Gets or sets the nr_consulta for this cpp.
        /// </field>
        /// <field name="idmother" type="String">
        /// Gets or sets the idmother for this cpp.
        /// </field>
        /// <field name="nlivro" type="String">
        /// Gets or sets the nlivro for this cpp.
        /// </field>
        /// <field name="visdate" type="Date">
        /// Gets or sets the visdate for this cpp.
        /// </field>
        /// <field name="age" type="Number">
        /// Gets or sets the age for this cpp.
        /// </field>
        /// <field name="localparto" type="String">
        /// Gets or sets the localparto for this cpp.
        /// </field>
        /// <field name="diasapoisparto" type="String">
        /// Gets or sets the diasapoisparto for this cpp.
        /// </field>
        /// <field name="parceiropresente" type="Number">
        /// Gets or sets the parceiropresente for this cpp.
        /// </field>
        /// <field name="estadorecemnascido" type="String">
        /// Gets or sets the estadorecemnascido for this cpp.
        /// </field>
        /// <field name="anemia" type="Boolean">
        /// Gets or sets the anemia for this cpp.
        /// </field>
        /// <field name="e_clinicogenecologico" type="String">
        /// Gets or sets the e_clinicogenecologico for this cpp.
        /// </field>
        /// <field name="outrapatologia" type="String">
        /// Gets or sets the outrapatologia for this cpp.
        /// </field>
        /// <field name="dag_dam" type="String">
        /// Gets or sets the dag_dam for this cpp.
        /// </field>
        /// <field name="suplementonutricional" type="String">
        /// Gets or sets the suplementonutricional for this cpp.
        /// </field>
        /// <field name="transferida" type="Boolean">
        /// Gets or sets the transferida for this cpp.
        /// </field>
        /// <field name="almaternoexclusivo" type="String">
        /// Gets or sets the almaternoexclusivo for this cpp.
        /// </field>
        /// <field name="testemalaria" type="String">
        /// Gets or sets the testemalaria for this cpp.
        /// </field>
        /// <field name="resultado_TDR_HTZ" type="String">
        /// Gets or sets the resultado_TDR_HTZ for this cpp.
        /// </field>
        /// <field name="puerperamalariatratada" type="String">
        /// Gets or sets the puerperamalariatratada for this cpp.
        /// </field>
        /// <field name="estadoentradacpp" type="String">
        /// Gets or sets the estadoentradacpp for this cpp.
        /// </field>
        /// <field name="resultadocpp" type="String">
        /// Gets or sets the resultadocpp for this cpp.
        /// </field>
        /// <field name="dosepuerpera" type="String">
        /// Gets or sets the dosepuerpera for this cpp.
        /// </field>
        /// <field name="iniciottosifiliscpp" type="String">
        /// Gets or sets the iniciottosifiliscpp for this cpp.
        /// </field>
        /// <field name="parceirottocpp" type="String">
        /// Gets or sets the parceirottocpp for this cpp.
        /// </field>
        /// <field name="seroestadoentradacpp" type="String">
        /// Gets or sets the seroestadoentradacpp for this cpp.
        /// </field>
        /// <field name="testehivconsultacpp" type="String">
        /// Gets or sets the testehivconsultacpp for this cpp.
        /// </field>
        /// <field name="emtarv" type="Boolean">
        /// Gets or sets the emtarv for this cpp.
        /// </field>
        /// <field name="iniciatarv" type="Boolean">
        /// Gets or sets the iniciatarv for this cpp.
        /// </field>
        /// <field name="continuatarv" type="Boolean">
        /// Gets or sets the continuatarv for this cpp.
        /// </field>
        /// <field name="rn_tarv" type="Boolean">
        /// Gets or sets the rn_tarv for this cpp.
        /// </field>
        /// <field name="testehivparceiro" type="String">
        /// Gets or sets the testehivparceiro for this cpp.
        /// </field>
        /// <field name="ttopuerpera" type="String">
        /// Gets or sets the ttopuerpera for this cpp.
        /// </field>
        /// <field name="rntto" type="String">
        /// Gets or sets the rntto for this cpp.
        /// </field>
        /// <field name="vitAcpp" type="String">
        /// Gets or sets the vitAcpp for this cpp.
        /// </field>
        /// <field name="salferroso_acfolico" type="String">
        /// Gets or sets the salferroso_acfolico for this cpp.
        /// </field>
        /// <field name="transfistula" type="String">
        /// Gets or sets the transfistula for this cpp.
        /// </field>
        /// <field name="rnccr" type="String">
        /// Gets or sets the rnccr for this cpp.
        /// </field>
        /// <field name="transcsr_pf" type="String">
        /// Gets or sets the transcsr_pf for this cpp.
        /// </field>
        /// <field name="obs" type="String">
        /// Gets or sets the obs for this cpp.
        /// </field>
        /// <field name="providername" type="String">
        /// Gets or sets the providername for this cpp.
        /// </field>
        /// <field name="details" type="msls.application.cpp.Details">
        /// Gets the details for this cpp.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function csr_pf(entitySet) {
        /// <summary>
        /// Represents the csr_pf entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this csr_pf.
        /// </param>
        /// <field name="id" type="String">
        /// Gets or sets the id for this csr_pf.
        /// </field>
        /// <field name="nr_consulta" type="Number">
        /// Gets or sets the nr_consulta for this csr_pf.
        /// </field>
        /// <field name="details" type="msls.application.csr_pf.Details">
        /// Gets the details for this csr_pf.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function laboratoriotb(entitySet) {
        /// <summary>
        /// Represents the laboratoriotb entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this laboratoriotb.
        /// </param>
        /// <field name="id" type="String">
        /// Gets or sets the id for this laboratoriotb.
        /// </field>
        /// <field name="ano" type="Number">
        /// Gets or sets the ano for this laboratoriotb.
        /// </field>
        /// <field name="mes" type="Number">
        /// Gets or sets the mes for this laboratoriotb.
        /// </field>
        /// <field name="numlab" type="String">
        /// Gets or sets the numlab for this laboratoriotb.
        /// </field>
        /// <field name="nit_nid" type="String">
        /// Gets or sets the nit_nid for this laboratoriotb.
        /// </field>
        /// <field name="NIT" type="String">
        /// Gets or sets the nIT for this laboratoriotb.
        /// </field>
        /// <field name="NID" type="String">
        /// Gets or sets the nID for this laboratoriotb.
        /// </field>
        /// <field name="nome" type="String">
        /// Gets or sets the nome for this laboratoriotb.
        /// </field>
        /// <field name="sexo" type="String">
        /// Gets or sets the sexo for this laboratoriotb.
        /// </field>
        /// <field name="idade" type="Number">
        /// Gets or sets the idade for this laboratoriotb.
        /// </field>
        /// <field name="residencia" type="String">
        /// Gets or sets the residencia for this laboratoriotb.
        /// </field>
        /// <field name="ocupacao" type="String">
        /// Gets or sets the ocupacao for this laboratoriotb.
        /// </field>
        /// <field name="telefone" type="String">
        /// Gets or sets the telefone for this laboratoriotb.
        /// </field>
        /// <field name="usreferencia" type="String">
        /// Gets or sets the usreferencia for this laboratoriotb.
        /// </field>
        /// <field name="proveniencia" type="String">
        /// Gets or sets the proveniencia for this laboratoriotb.
        /// </field>
        /// <field name="HIV" type="String">
        /// Gets or sets the hIV for this laboratoriotb.
        /// </field>
        /// <field name="ot_imunodepressao" type="String">
        /// Gets or sets the ot_imunodepressao for this laboratoriotb.
        /// </field>
        /// <field name="tipodoente" type="String">
        /// Gets or sets the tipodoente for this laboratoriotb.
        /// </field>
        /// <field name="motivoexame" type="String">
        /// Gets or sets the motivoexame for this laboratoriotb.
        /// </field>
        /// <field name="mescontrolo" type="Number">
        /// Gets or sets the mescontrolo for this laboratoriotb.
        /// </field>
        /// <field name="examesolicitado" type="String">
        /// Gets or sets the examesolicitado for this laboratoriotb.
        /// </field>
        /// <field name="datacolheita1" type="Date">
        /// Gets or sets the datacolheita1 for this laboratoriotb.
        /// </field>
        /// <field name="datacolheita2" type="Date">
        /// Gets or sets the datacolheita2 for this laboratoriotb.
        /// </field>
        /// <field name="datarecepcao1" type="Date">
        /// Gets or sets the datarecepcao1 for this laboratoriotb.
        /// </field>
        /// <field name="datarecepcao2" type="Date">
        /// Gets or sets the datarecepcao2 for this laboratoriotb.
        /// </field>
        /// <field name="tipoamostra" type="String">
        /// Gets or sets the tipoamostra for this laboratoriotb.
        /// </field>
        /// <field name="aspectomicro1" type="String">
        /// Gets or sets the aspectomicro1 for this laboratoriotb.
        /// </field>
        /// <field name="aspectomicro2" type="String">
        /// Gets or sets the aspectomicro2 for this laboratoriotb.
        /// </field>
        /// <field name="resultadobk1" type="String">
        /// Gets or sets the resultadobk1 for this laboratoriotb.
        /// </field>
        /// <field name="dataresultadobk1" type="Date">
        /// Gets or sets the dataresultadobk1 for this laboratoriotb.
        /// </field>
        /// <field name="resultadobk2" type="String">
        /// Gets or sets the resultadobk2 for this laboratoriotb.
        /// </field>
        /// <field name="dataresultadobk2" type="Date">
        /// Gets or sets the dataresultadobk2 for this laboratoriotb.
        /// </field>
        /// <field name="resultadomtb" type="String">
        /// Gets or sets the resultadomtb for this laboratoriotb.
        /// </field>
        /// <field name="dataresultadomtb" type="Date">
        /// Gets or sets the dataresultadomtb for this laboratoriotb.
        /// </field>
        /// <field name="resultadorif" type="String">
        /// Gets or sets the resultadorif for this laboratoriotb.
        /// </field>
        /// <field name="dataresultadorif" type="Date">
        /// Gets or sets the dataresultadorif for this laboratoriotb.
        /// </field>
        /// <field name="repetirxpert" type="String">
        /// Gets or sets the repetirxpert for this laboratoriotb.
        /// </field>
        /// <field name="iniciaistecinico" type="String">
        /// Gets or sets the iniciaistecinico for this laboratoriotb.
        /// </field>
        /// <field name="obs" type="String">
        /// Gets or sets the obs for this laboratoriotb.
        /// </field>
        /// <field name="details" type="msls.application.laboratoriotb.Details">
        /// Gets the details for this laboratoriotb.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function livro(entitySet) {
        /// <summary>
        /// Represents the livro entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this livro.
        /// </param>
        /// <field name="nlivro" type="String">
        /// Gets or sets the nlivro for this livro.
        /// </field>
        /// <field name="provincia" type="String">
        /// Gets or sets the provincia for this livro.
        /// </field>
        /// <field name="distrito" type="String">
        /// Gets or sets the distrito for this livro.
        /// </field>
        /// <field name="uscode" type="String">
        /// Gets or sets the uscode for this livro.
        /// </field>
        /// <field name="usname" type="String">
        /// Gets or sets the usname for this livro.
        /// </field>
        /// <field name="initdate" type="Date">
        /// Gets or sets the initdate for this livro.
        /// </field>
        /// <field name="tipolivro" type="String">
        /// Gets or sets the tipolivro for this livro.
        /// </field>
        /// <field name="ID" type="Number">
        /// Gets or sets the iD for this livro.
        /// </field>
        /// <field name="details" type="msls.application.livro.Details">
        /// Gets the details for this livro.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function maternidade(entitySet) {
        /// <summary>
        /// Represents the maternidade entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this maternidade.
        /// </param>
        /// <field name="id" type="Number">
        /// Gets or sets the id for this maternidade.
        /// </field>
        /// <field name="admissiondate" type="Date">
        /// Gets or sets the admissiondate for this maternidade.
        /// </field>
        /// <field name="admissionhr" type="Object">
        /// Gets or sets the admissionhr for this maternidade.
        /// </field>
        /// <field name="nid_cpn" type="String">
        /// Gets or sets the nid_cpn for this maternidade.
        /// </field>
        /// <field name="nid_tarv" type="String">
        /// Gets or sets the nid_tarv for this maternidade.
        /// </field>
        /// <field name="name" type="String">
        /// Gets or sets the name for this maternidade.
        /// </field>
        /// <field name="transfer" type="String">
        /// Gets or sets the transfer for this maternidade.
        /// </field>
        /// <field name="age" type="Number">
        /// Gets or sets the age for this maternidade.
        /// </field>
        /// <field name="gestbirth" type="String">
        /// Gets or sets the gestbirth for this maternidade.
        /// </field>
        /// <field name="gestage" type="Number">
        /// Gets or sets the gestage for this maternidade.
        /// </field>
        /// <field name="serostatus_unk" type="Boolean">
        /// Gets or sets the serostatus_unk for this maternidade.
        /// </field>
        /// <field name="serostatus_neg3m" type="Boolean">
        /// Gets or sets the serostatus_neg3m for this maternidade.
        /// </field>
        /// <field name="serostatus_pos" type="Boolean">
        /// Gets or sets the serostatus_pos for this maternidade.
        /// </field>
        /// <field name="cpn_arv_init" type="Boolean">
        /// Gets or sets the cpn_arv_init for this maternidade.
        /// </field>
        /// <field name="mat_hiv_testing" type="String">
        /// Gets or sets the mat_hiv_testing for this maternidade.
        /// </field>
        /// <field name="triprofilafia" type="Boolean">
        /// Gets or sets the triprofilafia for this maternidade.
        /// </field>
        /// <field name="tarv_init_entr" type="Boolean">
        /// Gets or sets the tarv_init_entr for this maternidade.
        /// </field>
        /// <field name="tarv_init_matern" type="Boolean">
        /// Gets or sets the tarv_init_matern for this maternidade.
        /// </field>
        /// <field name="delivdate" type="Date">
        /// Gets or sets the delivdate for this maternidade.
        /// </field>
        /// <field name="delivhr" type="Object">
        /// Gets or sets the delivhr for this maternidade.
        /// </field>
        /// <field name="freq_fpos" type="Boolean">
        /// Gets or sets the freq_fpos for this maternidade.
        /// </field>
        /// <field name="fneg" type="Boolean">
        /// Gets or sets the fneg for this maternidade.
        /// </field>
        /// <field name="eutocic" type="Boolean">
        /// Gets or sets the eutocic for this maternidade.
        /// </field>
        /// <field name="ventosa" type="Boolean">
        /// Gets or sets the ventosa for this maternidade.
        /// </field>
        /// <field name="caesarean" type="Boolean">
        /// Gets or sets the caesarean for this maternidade.
        /// </field>
        /// <field name="oth_dystocia" type="Boolean">
        /// Gets or sets the oth_dystocia for this maternidade.
        /// </field>
        /// <field name="activeman3stag" type="Boolean">
        /// Gets or sets the activeman3stag for this maternidade.
        /// </field>
        /// <field name="manual_plac_remove" type="Boolean">
        /// Gets or sets the manual_plac_remove for this maternidade.
        /// </field>
        /// <field name="ceasarean_plac_remove" type="Boolean">
        /// Gets or sets the ceasarean_plac_remove for this maternidade.
        /// </field>
        /// <field name="delivcomp" type="Boolean">
        /// Gets or sets the delivcomp for this maternidade.
        /// </field>
        /// <field name="vertical_deliv" type="Boolean">
        /// Gets or sets the vertical_deliv for this maternidade.
        /// </field>
        /// <field name="partogr_filled" type="Boolean">
        /// Gets or sets the partogr_filled for this maternidade.
        /// </field>
        /// <field name="plac_previa" type="Boolean">
        /// Gets or sets the plac_previa for this maternidade.
        /// </field>
        /// <field name="detach_plac" type="Boolean">
        /// Gets or sets the detach_plac for this maternidade.
        /// </field>
        /// <field name="uterineatony" type="Boolean">
        /// Gets or sets the uterineatony for this maternidade.
        /// </field>
        /// <field name="placreten" type="Boolean">
        /// Gets or sets the placreten for this maternidade.
        /// </field>
        /// <field name="laceration" type="Boolean">
        /// Gets or sets the laceration for this maternidade.
        /// </field>
        /// <field name="out_rupt_uter" type="Boolean">
        /// Gets or sets the out_rupt_uter for this maternidade.
        /// </field>
        /// <field name="maternity_rupt_uter" type="Boolean">
        /// Gets or sets the maternity_rupt_uter for this maternidade.
        /// </field>
        /// <field name="tp_matern_local" type="Boolean">
        /// Gets or sets the tp_matern_local for this maternidade.
        /// </field>
        /// <field name="tp_arrastado" type="Boolean">
        /// Gets or sets the tp_arrastado for this maternidade.
        /// </field>
        /// <field name="pre_enclapsiasevera" type="Boolean">
        /// Gets or sets the pre_enclapsiasevera for this maternidade.
        /// </field>
        /// <field name="C_eclampsia" type="Boolean">
        /// Gets or sets the c_eclampsia for this maternidade.
        /// </field>
        /// <field name="sepsis" type="Boolean">
        /// Gets or sets the sepsis for this maternidade.
        /// </field>
        /// <field name="ot_complications" type="Boolean">
        /// Gets or sets the ot_complications for this maternidade.
        /// </field>
        /// <field name="malaria" type="Boolean">
        /// Gets or sets the malaria for this maternidade.
        /// </field>
        /// <field name="anemia" type="String">
        /// Gets or sets the anemia for this maternidade.
        /// </field>
        /// <field name="hiv_sida" type="Boolean">
        /// Gets or sets the hiv_sida for this maternidade.
        /// </field>
        /// <field name="tb" type="Boolean">
        /// Gets or sets the tb for this maternidade.
        /// </field>
        /// <field name="poisontrademed" type="Boolean">
        /// Gets or sets the poisontrademed for this maternidade.
        /// </field>
        /// <field name="ot_complications2" type="Boolean">
        /// Gets or sets the ot_complications2 for this maternidade.
        /// </field>
        /// <field name="maternaldeath" type="Boolean">
        /// Gets or sets the maternaldeath for this maternidade.
        /// </field>
        /// <field name="maternaldeathcause" type="String">
        /// Gets or sets the maternaldeathcause for this maternidade.
        /// </field>
        /// <field name="pi_antibiotics" type="Boolean">
        /// Gets or sets the pi_antibiotics for this maternidade.
        /// </field>
        /// <field name="ev_im_pphemor" type="Boolean">
        /// Gets or sets the ev_im_pphemor for this maternidade.
        /// </field>
        /// <field name="antihypertensive" type="Boolean">
        /// Gets or sets the antihypertensive for this maternidade.
        /// </field>
        /// <field name="magn_sulphate" type="Boolean">
        /// Gets or sets the magn_sulphate for this maternidade.
        /// </field>
        /// <field name="intrauterine_asp" type="Boolean">
        /// Gets or sets the intrauterine_asp for this maternidade.
        /// </field>
        /// <field name="bloodtransf" type="Boolean">
        /// Gets or sets the bloodtransf for this maternidade.
        /// </field>
        /// <field name="hyster_obstetric" type="Boolean">
        /// Gets or sets the hyster_obstetric for this maternidade.
        /// </field>
        /// <field name="tip_malaria_4dose" type="Boolean">
        /// Gets or sets the tip_malaria_4dose for this maternidade.
        /// </field>
        /// <field name="diu_ppimediate" type="Boolean">
        /// Gets or sets the diu_ppimediate for this maternidade.
        /// </field>
        /// <field name="ot_pp" type="Boolean">
        /// Gets or sets the ot_pp for this maternidade.
        /// </field>
        /// <field name="nadovivo" type="Boolean">
        /// Gets or sets the nadovivo for this maternidade.
        /// </field>
        /// <field name="nadomorto" type="Boolean">
        /// Gets or sets the nadomorto for this maternidade.
        /// </field>
        /// <field name="nadomorto_focoentrada" type="Boolean">
        /// Gets or sets the nadomorto_focoentrada for this maternidade.
        /// </field>
        /// <field name="nadomorto_macerado" type="Boolean">
        /// Gets or sets the nadomorto_macerado for this maternidade.
        /// </field>
        /// <field name="mot_skintoskin" type="Boolean">
        /// Gets or sets the mot_skintoskin for this maternidade.
        /// </field>
        /// <field name="breastfeeding_1hr" type="Boolean">
        /// Gets or sets the breastfeeding_1hr for this maternidade.
        /// </field>
        /// <field name="premature" type="Boolean">
        /// Gets or sets the premature for this maternidade.
        /// </field>
        /// <field name="neonatalsepsis" type="Boolean">
        /// Gets or sets the neonatalsepsis for this maternidade.
        /// </field>
        /// <field name="neonatalasphyxia" type="Boolean">
        /// Gets or sets the neonatalasphyxia for this maternidade.
        /// </field>
        /// <field name="malformation" type="Boolean">
        /// Gets or sets the malformation for this maternidade.
        /// </field>
        /// <field name="success_reanimation" type="Boolean">
        /// Gets or sets the success_reanimation for this maternidade.
        /// </field>
        /// <field name="unsuccess_reanimation" type="Boolean">
        /// Gets or sets the unsuccess_reanimation for this maternidade.
        /// </field>
        /// <field name="complicat_spec" type="Boolean">
        /// Gets or sets the complicat_spec for this maternidade.
        /// </field>
        /// <field name="twin" type="Boolean">
        /// Gets or sets the twin for this maternidade.
        /// </field>
        /// <field name="gender" type="String">
        /// Gets or sets the gender for this maternidade.
        /// </field>
        /// <field name="weight" type="Number">
        /// Gets or sets the weight for this maternidade.
        /// </field>
        /// <field name="weight_under2500gr" type="Boolean">
        /// Gets or sets the weight_under2500gr for this maternidade.
        /// </field>
        /// <field name="newborn_arv" type="Boolean">
        /// Gets or sets the newborn_arv for this maternidade.
        /// </field>
        /// <field name="nb_syphilistreat" type="String">
        /// Gets or sets the nb_syphilistreat for this maternidade.
        /// </field>
        /// <field name="mot_vitamin_a" type="String">
        /// Gets or sets the mot_vitamin_a for this maternidade.
        /// </field>
        /// <field name="mot_saltferrous" type="String">
        /// Gets or sets the mot_saltferrous for this maternidade.
        /// </field>
        /// <field name="mot_home_arv" type="String">
        /// Gets or sets the mot_home_arv for this maternidade.
        /// </field>
        /// <field name="chd_home_arv" type="String">
        /// Gets or sets the chd_home_arv for this maternidade.
        /// </field>
        /// <field name="discharge_date" type="Date">
        /// Gets or sets the discharge_date for this maternidade.
        /// </field>
        /// <field name="transfer_out_us" type="String">
        /// Gets or sets the transfer_out_us for this maternidade.
        /// </field>
        /// <field name="hospitaldays" type="Number">
        /// Gets or sets the hospitaldays for this maternidade.
        /// </field>
        /// <field name="obs" type="String">
        /// Gets or sets the obs for this maternidade.
        /// </field>
        /// <field name="providername" type="String">
        /// Gets or sets the providername for this maternidade.
        /// </field>
        /// <field name="details" type="msls.application.maternidade.Details">
        /// Gets the details for this maternidade.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function mother(entitySet) {
        /// <summary>
        /// Represents the mother entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this mother.
        /// </param>
        /// <field name="id" type="Number">
        /// Gets or sets the id for this mother.
        /// </field>
        /// <field name="nid_cpn" type="String">
        /// Gets or sets the nid_cpn for this mother.
        /// </field>
        /// <field name="nid_tarv" type="String">
        /// Gets or sets the nid_tarv for this mother.
        /// </field>
        /// <field name="name" type="String">
        /// Gets or sets the name for this mother.
        /// </field>
        /// <field name="residence" type="String">
        /// Gets or sets the residence for this mother.
        /// </field>
        /// <field name="phone" type="String">
        /// Gets or sets the phone for this mother.
        /// </field>
        /// <field name="dob" type="Date">
        /// Gets or sets the dob for this mother.
        /// </field>
        /// <field name="details" type="msls.application.mother.Details">
        /// Gets the details for this mother.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function paciente_resistente_tb(entitySet) {
        /// <summary>
        /// Represents the paciente_resistente_tb entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this paciente_resistente_tb.
        /// </param>
        /// <field name="id" type="String">
        /// Gets or sets the id for this paciente_resistente_tb.
        /// </field>
        /// <field name="distrito" type="String">
        /// Gets or sets the distrito for this paciente_resistente_tb.
        /// </field>
        /// <field name="us" type="String">
        /// Gets or sets the us for this paciente_resistente_tb.
        /// </field>
        /// <field name="dataregisto" type="Date">
        /// Gets or sets the dataregisto for this paciente_resistente_tb.
        /// </field>
        /// <field name="NIT2" type="String">
        /// Gets or sets the nIT2 for this paciente_resistente_tb.
        /// </field>
        /// <field name="nome" type="String">
        /// Gets or sets the nome for this paciente_resistente_tb.
        /// </field>
        /// <field name="sexo" type="String">
        /// Gets or sets the sexo for this paciente_resistente_tb.
        /// </field>
        /// <field name="grupoetario" type="Boolean">
        /// Gets or sets the grupoetario for this paciente_resistente_tb.
        /// </field>
        /// <field name="endereco" type="String">
        /// Gets or sets the endereco for this paciente_resistente_tb.
        /// </field>
        /// <field name="telefone" type="String">
        /// Gets or sets the telefone for this paciente_resistente_tb.
        /// </field>
        /// <field name="ocupacao" type="String">
        /// Gets or sets the ocupacao for this paciente_resistente_tb.
        /// </field>
        /// <field name="NIT" type="String">
        /// Gets or sets the nIT for this paciente_resistente_tb.
        /// </field>
        /// <field name="dataregistotb" type="Date">
        /// Gets or sets the dataregistotb for this paciente_resistente_tb.
        /// </field>
        /// <field name="localizacaolesao" type="String">
        /// Gets or sets the localizacaolesao for this paciente_resistente_tb.
        /// </field>
        /// <field name="categoriadoete" type="String">
        /// Gets or sets the categoriadoete for this paciente_resistente_tb.
        /// </field>
        /// <field name="ttoprevio2l" type="String">
        /// Gets or sets the ttoprevio2l for this paciente_resistente_tb.
        /// </field>
        /// <field name="diagconfirmadopor" type="Boolean">
        /// Gets or sets the diagconfirmadopor for this paciente_resistente_tb.
        /// </field>
        /// <field name="datacolheitatsa" type="Date">
        /// Gets or sets the datacolheitatsa for this paciente_resistente_tb.
        /// </field>
        /// <field name="dataresultadotsa" type="Date">
        /// Gets or sets the dataresultadotsa for this paciente_resistente_tb.
        /// </field>
        /// <field name="sensibilidade_s" type="Boolean">
        /// Gets or sets the sensibilidade_s for this paciente_resistente_tb.
        /// </field>
        /// <field name="sensibilidade_h" type="Boolean">
        /// Gets or sets the sensibilidade_h for this paciente_resistente_tb.
        /// </field>
        /// <field name="sensibilidade_r" type="Boolean">
        /// Gets or sets the sensibilidade_r for this paciente_resistente_tb.
        /// </field>
        /// <field name="sensibilidade_e" type="Boolean">
        /// Gets or sets the sensibilidade_e for this paciente_resistente_tb.
        /// </field>
        /// <field name="sensibilidade_z" type="Boolean">
        /// Gets or sets the sensibilidade_z for this paciente_resistente_tb.
        /// </field>
        /// <field name="sensibilidade_Amk_Km" type="Boolean">
        /// Gets or sets the sensibilidade_Amk_Km for this paciente_resistente_tb.
        /// </field>
        /// <field name="sensibilidade_cm" type="Boolean">
        /// Gets or sets the sensibilidade_cm for this paciente_resistente_tb.
        /// </field>
        /// <field name="sensibilidade_FQ" type="Boolean">
        /// Gets or sets the sensibilidade_FQ for this paciente_resistente_tb.
        /// </field>
        /// <field name="sensibilidade_Pto_Eto" type="Boolean">
        /// Gets or sets the sensibilidade_Pto_Eto for this paciente_resistente_tb.
        /// </field>
        /// <field name="sensibilidade_Outro1" type="String">
        /// Gets or sets the sensibilidade_Outro1 for this paciente_resistente_tb.
        /// </field>
        /// <field name="sensibilidade_Outro2" type="String">
        /// Gets or sets the sensibilidade_Outro2 for this paciente_resistente_tb.
        /// </field>
        /// <field name="sensibilidade_Outro3" type="String">
        /// Gets or sets the sensibilidade_Outro3 for this paciente_resistente_tb.
        /// </field>
        /// <field name="perfilresistencia" type="String">
        /// Gets or sets the perfilresistencia for this paciente_resistente_tb.
        /// </field>
        /// <field name="contactosrastreadostbr" type="Number">
        /// Gets or sets the contactosrastreadostbr for this paciente_resistente_tb.
        /// </field>
        /// <field name="contactoscomtbr" type="Number">
        /// Gets or sets the contactoscomtbr for this paciente_resistente_tb.
        /// </field>
        /// <field name="tastehiv" type="String">
        /// Gets or sets the tastehiv for this paciente_resistente_tb.
        /// </field>
        /// <field name="dataresultadohiv" type="Date">
        /// Gets or sets the dataresultadohiv for this paciente_resistente_tb.
        /// </field>
        /// <field name="tpc" type="String">
        /// Gets or sets the tpc for this paciente_resistente_tb.
        /// </field>
        /// <field name="datainiciotpc" type="Date">
        /// Gets or sets the datainiciotpc for this paciente_resistente_tb.
        /// </field>
        /// <field name="emtarv" type="String">
        /// Gets or sets the emtarv for this paciente_resistente_tb.
        /// </field>
        /// <field name="NID" type="String">
        /// Gets or sets the nID for this paciente_resistente_tb.
        /// </field>
        /// <field name="datainiciotarv" type="Date">
        /// Gets or sets the datainiciotarv for this paciente_resistente_tb.
        /// </field>
        /// <field name="regimetratamento" type="String">
        /// Gets or sets the regimetratamento for this paciente_resistente_tb.
        /// </field>
        /// <field name="ustratamento" type="String">
        /// Gets or sets the ustratamento for this paciente_resistente_tb.
        /// </field>
        /// <field name="usdatainiciotto" type="Date">
        /// Gets or sets the usdatainiciotto for this paciente_resistente_tb.
        /// </field>
        /// <field name="comtratamento" type="String">
        /// Gets or sets the comtratamento for this paciente_resistente_tb.
        /// </field>
        /// <field name="comdatainiciotto" type="Date">
        /// Gets or sets the comdatainiciotto for this paciente_resistente_tb.
        /// </field>
        /// <field name="resultadobk_0m" type="String">
        /// Gets or sets the resultadobk_0m for this paciente_resistente_tb.
        /// </field>
        /// <field name="dataresultadobk_0m" type="Date">
        /// Gets or sets the dataresultadobk_0m for this paciente_resistente_tb.
        /// </field>
        /// <field name="resultadocultura_0m" type="String">
        /// Gets or sets the resultadocultura_0m for this paciente_resistente_tb.
        /// </field>
        /// <field name="dataresultadocultura_0m" type="Date">
        /// Gets or sets the dataresultadocultura_0m for this paciente_resistente_tb.
        /// </field>
        /// <field name="resultadobk_1m" type="String">
        /// Gets or sets the resultadobk_1m for this paciente_resistente_tb.
        /// </field>
        /// <field name="resultadocultura_1m" type="String">
        /// Gets or sets the resultadocultura_1m for this paciente_resistente_tb.
        /// </field>
        /// <field name="dataresultado_1m" type="Date">
        /// Gets or sets the dataresultado_1m for this paciente_resistente_tb.
        /// </field>
        /// <field name="resultadobk_2m" type="String">
        /// Gets or sets the resultadobk_2m for this paciente_resistente_tb.
        /// </field>
        /// <field name="resultadocultura_2m" type="String">
        /// Gets or sets the resultadocultura_2m for this paciente_resistente_tb.
        /// </field>
        /// <field name="dataresultado_2m" type="Date">
        /// Gets or sets the dataresultado_2m for this paciente_resistente_tb.
        /// </field>
        /// <field name="resultadobk_3m" type="String">
        /// Gets or sets the resultadobk_3m for this paciente_resistente_tb.
        /// </field>
        /// <field name="resultadocultura_3m" type="String">
        /// Gets or sets the resultadocultura_3m for this paciente_resistente_tb.
        /// </field>
        /// <field name="dataresultado_3m" type="Date">
        /// Gets or sets the dataresultado_3m for this paciente_resistente_tb.
        /// </field>
        /// <field name="resultadobk_4m" type="String">
        /// Gets or sets the resultadobk_4m for this paciente_resistente_tb.
        /// </field>
        /// <field name="resultadocultura_4m" type="String">
        /// Gets or sets the resultadocultura_4m for this paciente_resistente_tb.
        /// </field>
        /// <field name="dataresultado_4m" type="Date">
        /// Gets or sets the dataresultado_4m for this paciente_resistente_tb.
        /// </field>
        /// <field name="resultadobk_5m" type="String">
        /// Gets or sets the resultadobk_5m for this paciente_resistente_tb.
        /// </field>
        /// <field name="resultadocultura_5m" type="String">
        /// Gets or sets the resultadocultura_5m for this paciente_resistente_tb.
        /// </field>
        /// <field name="dataresultado_5m" type="Date">
        /// Gets or sets the dataresultado_5m for this paciente_resistente_tb.
        /// </field>
        /// <field name="resultadobk_6m" type="String">
        /// Gets or sets the resultadobk_6m for this paciente_resistente_tb.
        /// </field>
        /// <field name="resultadocultura_6m" type="String">
        /// Gets or sets the resultadocultura_6m for this paciente_resistente_tb.
        /// </field>
        /// <field name="dataresultado_6m" type="Date">
        /// Gets or sets the dataresultado_6m for this paciente_resistente_tb.
        /// </field>
        /// <field name="estadopaciente6meses" type="String">
        /// Gets or sets the estadopaciente6meses for this paciente_resistente_tb.
        /// </field>
        /// <field name="resultadobk_7m" type="String">
        /// Gets or sets the resultadobk_7m for this paciente_resistente_tb.
        /// </field>
        /// <field name="resultadocultura_7m" type="String">
        /// Gets or sets the resultadocultura_7m for this paciente_resistente_tb.
        /// </field>
        /// <field name="dataresultado_7m" type="Date">
        /// Gets or sets the dataresultado_7m for this paciente_resistente_tb.
        /// </field>
        /// <field name="resultadobk_8m" type="String">
        /// Gets or sets the resultadobk_8m for this paciente_resistente_tb.
        /// </field>
        /// <field name="resultadocultura_8m" type="String">
        /// Gets or sets the resultadocultura_8m for this paciente_resistente_tb.
        /// </field>
        /// <field name="dataresultado_8m" type="Date">
        /// Gets or sets the dataresultado_8m for this paciente_resistente_tb.
        /// </field>
        /// <field name="resultadobk_9m" type="String">
        /// Gets or sets the resultadobk_9m for this paciente_resistente_tb.
        /// </field>
        /// <field name="resultadocultura_9m" type="String">
        /// Gets or sets the resultadocultura_9m for this paciente_resistente_tb.
        /// </field>
        /// <field name="dataresultado_9m" type="Date">
        /// Gets or sets the dataresultado_9m for this paciente_resistente_tb.
        /// </field>
        /// <field name="resultadobk_10m" type="String">
        /// Gets or sets the resultadobk_10m for this paciente_resistente_tb.
        /// </field>
        /// <field name="resultadocultura_10m" type="String">
        /// Gets or sets the resultadocultura_10m for this paciente_resistente_tb.
        /// </field>
        /// <field name="dataresultado_10m" type="Date">
        /// Gets or sets the dataresultado_10m for this paciente_resistente_tb.
        /// </field>
        /// <field name="resultadobk_11m" type="String">
        /// Gets or sets the resultadobk_11m for this paciente_resistente_tb.
        /// </field>
        /// <field name="resultadocultura_11m" type="String">
        /// Gets or sets the resultadocultura_11m for this paciente_resistente_tb.
        /// </field>
        /// <field name="dataresultado_11m" type="Date">
        /// Gets or sets the dataresultado_11m for this paciente_resistente_tb.
        /// </field>
        /// <field name="resultadobk_12m" type="String">
        /// Gets or sets the resultadobk_12m for this paciente_resistente_tb.
        /// </field>
        /// <field name="resultadocultura_12m" type="String">
        /// Gets or sets the resultadocultura_12m for this paciente_resistente_tb.
        /// </field>
        /// <field name="dataresultado_12m" type="Date">
        /// Gets or sets the dataresultado_12m for this paciente_resistente_tb.
        /// </field>
        /// <field name="estadopaciente12meses" type="String">
        /// Gets or sets the estadopaciente12meses for this paciente_resistente_tb.
        /// </field>
        /// <field name="resultadobk_14m" type="String">
        /// Gets or sets the resultadobk_14m for this paciente_resistente_tb.
        /// </field>
        /// <field name="resultadocultura_14m" type="String">
        /// Gets or sets the resultadocultura_14m for this paciente_resistente_tb.
        /// </field>
        /// <field name="dataresultado_14m" type="Date">
        /// Gets or sets the dataresultado_14m for this paciente_resistente_tb.
        /// </field>
        /// <field name="resultadobk_16m" type="String">
        /// Gets or sets the resultadobk_16m for this paciente_resistente_tb.
        /// </field>
        /// <field name="resultadocultura_16m" type="String">
        /// Gets or sets the resultadocultura_16m for this paciente_resistente_tb.
        /// </field>
        /// <field name="dataresultado_16m" type="Date">
        /// Gets or sets the dataresultado_16m for this paciente_resistente_tb.
        /// </field>
        /// <field name="resultadobk_18m" type="String">
        /// Gets or sets the resultadobk_18m for this paciente_resistente_tb.
        /// </field>
        /// <field name="resultadocultura_18m" type="String">
        /// Gets or sets the resultadocultura_18m for this paciente_resistente_tb.
        /// </field>
        /// <field name="dataresultado_18m" type="Date">
        /// Gets or sets the dataresultado_18m for this paciente_resistente_tb.
        /// </field>
        /// <field name="estadopaciente18meses" type="String">
        /// Gets or sets the estadopaciente18meses for this paciente_resistente_tb.
        /// </field>
        /// <field name="resultadobk_20m" type="String">
        /// Gets or sets the resultadobk_20m for this paciente_resistente_tb.
        /// </field>
        /// <field name="resultadocultura_20m" type="String">
        /// Gets or sets the resultadocultura_20m for this paciente_resistente_tb.
        /// </field>
        /// <field name="dataresultado_20m" type="Date">
        /// Gets or sets the dataresultado_20m for this paciente_resistente_tb.
        /// </field>
        /// <field name="resultadobk_22m" type="String">
        /// Gets or sets the resultadobk_22m for this paciente_resistente_tb.
        /// </field>
        /// <field name="resultadocultura_22m" type="String">
        /// Gets or sets the resultadocultura_22m for this paciente_resistente_tb.
        /// </field>
        /// <field name="dataresultado_22m" type="Date">
        /// Gets or sets the dataresultado_22m for this paciente_resistente_tb.
        /// </field>
        /// <field name="resultadobk_24m" type="String">
        /// Gets or sets the resultadobk_24m for this paciente_resistente_tb.
        /// </field>
        /// <field name="resultadocultura_24m" type="String">
        /// Gets or sets the resultadocultura_24m for this paciente_resistente_tb.
        /// </field>
        /// <field name="dataresultado_24m" type="Date">
        /// Gets or sets the dataresultado_24m for this paciente_resistente_tb.
        /// </field>
        /// <field name="estadopaciente24meses" type="String">
        /// Gets or sets the estadopaciente24meses for this paciente_resistente_tb.
        /// </field>
        /// <field name="resultadobk_26m" type="String">
        /// Gets or sets the resultadobk_26m for this paciente_resistente_tb.
        /// </field>
        /// <field name="resultadocultura_26m" type="String">
        /// Gets or sets the resultadocultura_26m for this paciente_resistente_tb.
        /// </field>
        /// <field name="dataresultado_26m" type="Date">
        /// Gets or sets the dataresultado_26m for this paciente_resistente_tb.
        /// </field>
        /// <field name="resultadobk_28m" type="String">
        /// Gets or sets the resultadobk_28m for this paciente_resistente_tb.
        /// </field>
        /// <field name="resultadocultura_28m" type="String">
        /// Gets or sets the resultadocultura_28m for this paciente_resistente_tb.
        /// </field>
        /// <field name="dataresultado_28m" type="Date">
        /// Gets or sets the dataresultado_28m for this paciente_resistente_tb.
        /// </field>
        /// <field name="resultadobk_30m" type="String">
        /// Gets or sets the resultadobk_30m for this paciente_resistente_tb.
        /// </field>
        /// <field name="resultadocultura_30m" type="String">
        /// Gets or sets the resultadocultura_30m for this paciente_resistente_tb.
        /// </field>
        /// <field name="dataresultado_30m" type="Date">
        /// Gets or sets the dataresultado_30m for this paciente_resistente_tb.
        /// </field>
        /// <field name="estadopaciente30meses" type="String">
        /// Gets or sets the estadopaciente30meses for this paciente_resistente_tb.
        /// </field>
        /// <field name="resultadofinaltto" type="String">
        /// Gets or sets the resultadofinaltto for this paciente_resistente_tb.
        /// </field>
        /// <field name="datafimtto" type="Date">
        /// Gets or sets the datafimtto for this paciente_resistente_tb.
        /// </field>
        /// <field name="obs" type="String">
        /// Gets or sets the obs for this paciente_resistente_tb.
        /// </field>
        /// <field name="nometecnico" type="String">
        /// Gets or sets the nometecnico for this paciente_resistente_tb.
        /// </field>
        /// <field name="details" type="msls.application.paciente_resistente_tb.Details">
        /// Gets the details for this paciente_resistente_tb.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function pacientetb(entitySet) {
        /// <summary>
        /// Represents the pacientetb entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this pacientetb.
        /// </param>
        /// <field name="id" type="String">
        /// Gets or sets the id for this pacientetb.
        /// </field>
        /// <field name="ano" type="Number">
        /// Gets or sets the ano for this pacientetb.
        /// </field>
        /// <field name="dataregisto" type="Date">
        /// Gets or sets the dataregisto for this pacientetb.
        /// </field>
        /// <field name="NIT" type="String">
        /// Gets or sets the nIT for this pacientetb.
        /// </field>
        /// <field name="nome" type="String">
        /// Gets or sets the nome for this pacientetb.
        /// </field>
        /// <field name="sexo" type="String">
        /// Gets or sets the sexo for this pacientetb.
        /// </field>
        /// <field name="grupoetario" type="Boolean">
        /// Gets or sets the grupoetario for this pacientetb.
        /// </field>
        /// <field name="residencia" type="String">
        /// Gets or sets the residencia for this pacientetb.
        /// </field>
        /// <field name="telefone" type="String">
        /// Gets or sets the telefone for this pacientetb.
        /// </field>
        /// <field name="ocupacao" type="String">
        /// Gets or sets the ocupacao for this pacientetb.
        /// </field>
        /// <field name="proveniencia" type="String">
        /// Gets or sets the proveniencia for this pacientetb.
        /// </field>
        /// <field name="localizacaolesao" type="String">
        /// Gets or sets the localizacaolesao for this pacientetb.
        /// </field>
        /// <field name="categoriadoente" type="String">
        /// Gets or sets the categoriadoente for this pacientetb.
        /// </field>
        /// <field name="datainiciotto" type="Date">
        /// Gets or sets the datainiciotto for this pacientetb.
        /// </field>
        /// <field name="casonovoadulto" type="String">
        /// Gets or sets the casonovoadulto for this pacientetb.
        /// </field>
        /// <field name="casonovocrianca" type="String">
        /// Gets or sets the casonovocrianca for this pacientetb.
        /// </field>
        /// <field name="retratamento" type="String">
        /// Gets or sets the retratamento for this pacientetb.
        /// </field>
        /// <field name="tbresistente" type="Boolean">
        /// Gets or sets the tbresistente for this pacientetb.
        /// </field>
        /// <field name="nit_tbresistente" type="String">
        /// Gets or sets the nit_tbresistente for this pacientetb.
        /// </field>
        /// <field name="fintensivalocal" type="String">
        /// Gets or sets the fintensivalocal for this pacientetb.
        /// </field>
        /// <field name="fintensivanomelocal" type="String">
        /// Gets or sets the fintensivanomelocal for this pacientetb.
        /// </field>
        /// <field name="fmanutencaolocal" type="String">
        /// Gets or sets the fmanutencaolocal for this pacientetb.
        /// </field>
        /// <field name="fmanutencaonomelocal" type="String">
        /// Gets or sets the fmanutencaonomelocal for this pacientetb.
        /// </field>
        /// <field name="testado" type="String">
        /// Gets or sets the testado for this pacientetb.
        /// </field>
        /// <field name="hivresultado" type="String">
        /// Gets or sets the hivresultado for this pacientetb.
        /// </field>
        /// <field name="tpc" type="String">
        /// Gets or sets the tpc for this pacientetb.
        /// </field>
        /// <field name="emtarv" type="String">
        /// Gets or sets the emtarv for this pacientetb.
        /// </field>
        /// <field name="NID" type="String">
        /// Gets or sets the nID for this pacientetb.
        /// </field>
        /// <field name="datainiciotarv" type="Date">
        /// Gets or sets the datainiciotarv for this pacientetb.
        /// </field>
        /// <field name="contactosrastreados" type="Number">
        /// Gets or sets the contactosrastreados for this pacientetb.
        /// </field>
        /// <field name="contactoscomtb" type="Number">
        /// Gets or sets the contactoscomtb for this pacientetb.
        /// </field>
        /// <field name="criancasrastreadas" type="Number">
        /// Gets or sets the criancasrastreadas for this pacientetb.
        /// </field>
        /// <field name="criancasquimioproflaxia" type="Number">
        /// Gets or sets the criancasquimioproflaxia for this pacientetb.
        /// </field>
        /// <field name="bkdata" type="Date">
        /// Gets or sets the bkdata for this pacientetb.
        /// </field>
        /// <field name="bkresultado" type="String">
        /// Gets or sets the bkresultado for this pacientetb.
        /// </field>
        /// <field name="bknumlab" type="String">
        /// Gets or sets the bknumlab for this pacientetb.
        /// </field>
        /// <field name="gxrifdata" type="Date">
        /// Gets or sets the gxrifdata for this pacientetb.
        /// </field>
        /// <field name="gxresultado" type="String">
        /// Gets or sets the gxresultado for this pacientetb.
        /// </field>
        /// <field name="rifresultado" type="String">
        /// Gets or sets the rifresultado for this pacientetb.
        /// </field>
        /// <field name="gxrifnumlab" type="String">
        /// Gets or sets the gxrifnumlab for this pacientetb.
        /// </field>
        /// <field name="culturadata" type="Date">
        /// Gets or sets the culturadata for this pacientetb.
        /// </field>
        /// <field name="culturaresultado" type="String">
        /// Gets or sets the culturaresultado for this pacientetb.
        /// </field>
        /// <field name="culturanumlab" type="String">
        /// Gets or sets the culturanumlab for this pacientetb.
        /// </field>
        /// <field name="rx" type="String">
        /// Gets or sets the rx for this pacientetb.
        /// </field>
        /// <field name="outrosexames" type="String">
        /// Gets or sets the outrosexames for this pacientetb.
        /// </field>
        /// <field name="bact_bkdata_2_3" type="Date">
        /// Gets or sets the bact_bkdata_2_3 for this pacientetb.
        /// </field>
        /// <field name="bact_bkresultado_2_3" type="String">
        /// Gets or sets the bact_bkresultado_2_3 for this pacientetb.
        /// </field>
        /// <field name="bact_bknumlab_2_3" type="String">
        /// Gets or sets the bact_bknumlab_2_3 for this pacientetb.
        /// </field>
        /// <field name="bact_culturadata_2_3" type="Date">
        /// Gets or sets the bact_culturadata_2_3 for this pacientetb.
        /// </field>
        /// <field name="bact_culturaresultado_2_3" type="String">
        /// Gets or sets the bact_culturaresultado_2_3 for this pacientetb.
        /// </field>
        /// <field name="bact_culturanumlab_2_3" type="String">
        /// Gets or sets the bact_culturanumlab_2_3 for this pacientetb.
        /// </field>
        /// <field name="bact_bkdata_5" type="Date">
        /// Gets or sets the bact_bkdata_5 for this pacientetb.
        /// </field>
        /// <field name="bact_bkresultado_5" type="String">
        /// Gets or sets the bact_bkresultado_5 for this pacientetb.
        /// </field>
        /// <field name="bact_bknumlab_5" type="String">
        /// Gets or sets the bact_bknumlab_5 for this pacientetb.
        /// </field>
        /// <field name="bact_culturadata_5" type="Date">
        /// Gets or sets the bact_culturadata_5 for this pacientetb.
        /// </field>
        /// <field name="bact_culturaresultado_5" type="String">
        /// Gets or sets the bact_culturaresultado_5 for this pacientetb.
        /// </field>
        /// <field name="bact_culturanumlab_5" type="String">
        /// Gets or sets the bact_culturanumlab_5 for this pacientetb.
        /// </field>
        /// <field name="bact_bkdata_fimtrat" type="Date">
        /// Gets or sets the bact_bkdata_fimtrat for this pacientetb.
        /// </field>
        /// <field name="bact_bkresultado_fimtrat" type="String">
        /// Gets or sets the bact_bkresultado_fimtrat for this pacientetb.
        /// </field>
        /// <field name="bact_bknumlab_fimtrat" type="String">
        /// Gets or sets the bact_bknumlab_fimtrat for this pacientetb.
        /// </field>
        /// <field name="bact_culturadata_fimtrat" type="Date">
        /// Gets or sets the bact_culturadata_fimtrat for this pacientetb.
        /// </field>
        /// <field name="bact_culturaresultado_fimtrat" type="String">
        /// Gets or sets the bact_culturaresultado_fimtrat for this pacientetb.
        /// </field>
        /// <field name="bact_culturanumlab_fimtrat" type="String">
        /// Gets or sets the bact_culturanumlab_fimtrat for this pacientetb.
        /// </field>
        /// <field name="datafimtratamento" type="Date">
        /// Gets or sets the datafimtratamento for this pacientetb.
        /// </field>
        /// <field name="resultadotratamento" type="String">
        /// Gets or sets the resultadotratamento for this pacientetb.
        /// </field>
        /// <field name="tb_resistente" type="Number">
        /// Gets or sets the tb_resistente for this pacientetb.
        /// </field>
        /// <field name="obs" type="String">
        /// Gets or sets the obs for this pacientetb.
        /// </field>
        /// <field name="details" type="msls.application.pacientetb.Details">
        /// Gets the details for this pacientetb.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function patient(entitySet) {
        /// <summary>
        /// Represents the patient entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this patient.
        /// </param>
        /// <field name="id" type="Number">
        /// Gets or sets the id for this patient.
        /// </field>
        /// <field name="person_type" type="String">
        /// Gets or sets the person_type for this patient.
        /// </field>
        /// <field name="nid_cpn" type="String">
        /// Gets or sets the nid_cpn for this patient.
        /// </field>
        /// <field name="nid_ccr" type="String">
        /// Gets or sets the nid_ccr for this patient.
        /// </field>
        /// <field name="nit" type="String">
        /// Gets or sets the nit for this patient.
        /// </field>
        /// <field name="nficha_gbv" type="String">
        /// Gets or sets the nficha_gbv for this patient.
        /// </field>
        /// <field name="nid_tarv" type="String">
        /// Gets or sets the nid_tarv for this patient.
        /// </field>
        /// <field name="name" type="String">
        /// Gets or sets the name for this patient.
        /// </field>
        /// <field name="residence" type="String">
        /// Gets or sets the residence for this patient.
        /// </field>
        /// <field name="phone" type="String">
        /// Gets or sets the phone for this patient.
        /// </field>
        /// <field name="dob" type="Date">
        /// Gets or sets the dob for this patient.
        /// </field>
        /// <field name="details" type="msls.application.patient.Details">
        /// Gets the details for this patient.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function t_categoria(entitySet) {
        /// <summary>
        /// Represents the t_categoria entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this t_categoria.
        /// </param>
        /// <field name="codcategoria" type="Number">
        /// Gets or sets the codcategoria for this t_categoria.
        /// </field>
        /// <field name="categoria" type="String">
        /// Gets or sets the categoria for this t_categoria.
        /// </field>
        /// <field name="details" type="msls.application.t_categoria.Details">
        /// Gets the details for this t_categoria.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function t_grauexposicao(entitySet) {
        /// <summary>
        /// Represents the t_grauexposicao entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this t_grauexposicao.
        /// </param>
        /// <field name="codigo" type="Number">
        /// Gets or sets the codigo for this t_grauexposicao.
        /// </field>
        /// <field name="grauexposicao" type="String">
        /// Gets or sets the grauexposicao for this t_grauexposicao.
        /// </field>
        /// <field name="details" type="msls.application.t_grauexposicao.Details">
        /// Gets the details for this t_grauexposicao.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function t_historia_clinica_notificacao(entitySet) {
        /// <summary>
        /// Represents the t_historia_clinica_notificacao entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this t_historia_clinica_notificacao.
        /// </param>
        /// <field name="ordem" type="Number">
        /// Gets or sets the ordem for this t_historia_clinica_notificacao.
        /// </field>
        /// <field name="notificacao" type="String">
        /// Gets or sets the notificacao for this t_historia_clinica_notificacao.
        /// </field>
        /// <field name="id" type="Number">
        /// Gets or sets the id for this t_historia_clinica_notificacao.
        /// </field>
        /// <field name="historicoclinico" type="String">
        /// Gets or sets the historicoclinico for this t_historia_clinica_notificacao.
        /// </field>
        /// <field name="valor" type="Boolean">
        /// Gets or sets the valor for this t_historia_clinica_notificacao.
        /// </field>
        /// <field name="details" type="msls.application.t_historia_clinica_notificacao.Details">
        /// Gets the details for this t_historia_clinica_notificacao.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function t_historiaclinica(entitySet) {
        /// <summary>
        /// Represents the t_historiaclinica entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this t_historiaclinica.
        /// </param>
        /// <field name="id" type="Number">
        /// Gets or sets the id for this t_historiaclinica.
        /// </field>
        /// <field name="historicoclinico" type="String">
        /// Gets or sets the historicoclinico for this t_historiaclinica.
        /// </field>
        /// <field name="tabela" type="String">
        /// Gets or sets the tabela for this t_historiaclinica.
        /// </field>
        /// <field name="details" type="msls.application.t_historiaclinica.Details">
        /// Gets the details for this t_historiaclinica.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function t_intervenco(entitySet) {
        /// <summary>
        /// Represents the t_intervenco entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this t_intervenco.
        /// </param>
        /// <field name="codintervencoes" type="Number">
        /// Gets or sets the codintervencoes for this t_intervenco.
        /// </field>
        /// <field name="intervencoes" type="String">
        /// Gets or sets the intervencoes for this t_intervenco.
        /// </field>
        /// <field name="details" type="msls.application.t_intervenco.Details">
        /// Gets the details for this t_intervenco.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function t_laboratorio_notificacao(entitySet) {
        /// <summary>
        /// Represents the t_laboratorio_notificacao entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this t_laboratorio_notificacao.
        /// </param>
        /// <field name="ordem" type="Number">
        /// Gets or sets the ordem for this t_laboratorio_notificacao.
        /// </field>
        /// <field name="notificacao" type="String">
        /// Gets or sets the notificacao for this t_laboratorio_notificacao.
        /// </field>
        /// <field name="id" type="Number">
        /// Gets or sets the id for this t_laboratorio_notificacao.
        /// </field>
        /// <field name="analise" type="String">
        /// Gets or sets the analise for this t_laboratorio_notificacao.
        /// </field>
        /// <field name="valor" type="String">
        /// Gets or sets the valor for this t_laboratorio_notificacao.
        /// </field>
        /// <field name="details" type="msls.application.t_laboratorio_notificacao.Details">
        /// Gets the details for this t_laboratorio_notificacao.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function t_localacidente(entitySet) {
        /// <summary>
        /// Represents the t_localacidente entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this t_localacidente.
        /// </param>
        /// <field name="codigo" type="Number">
        /// Gets or sets the codigo for this t_localacidente.
        /// </field>
        /// <field name="descricao" type="String">
        /// Gets or sets the descricao for this t_localacidente.
        /// </field>
        /// <field name="details" type="msls.application.t_localacidente.Details">
        /// Gets the details for this t_localacidente.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function t_notificacao(entitySet) {
        /// <summary>
        /// Represents the t_notificacao entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this t_notificacao.
        /// </param>
        /// <field name="notificacao" type="String">
        /// Gets or sets the notificacao for this t_notificacao.
        /// </field>
        /// <field name="data" type="Date">
        /// Gets or sets the data for this t_notificacao.
        /// </field>
        /// <field name="hora" type="Object">
        /// Gets or sets the hora for this t_notificacao.
        /// </field>
        /// <field name="us" type="String">
        /// Gets or sets the us for this t_notificacao.
        /// </field>
        /// <field name="referido_de" type="Number">
        /// Gets or sets the referido_de for this t_notificacao.
        /// </field>
        /// <field name="tipo_violencia" type="Number">
        /// Gets or sets the tipo_violencia for this t_notificacao.
        /// </field>
        /// <field name="nome" type="String">
        /// Gets or sets the nome for this t_notificacao.
        /// </field>
        /// <field name="endereco" type="String">
        /// Gets or sets the endereco for this t_notificacao.
        /// </field>
        /// <field name="telefone" type="String">
        /// Gets or sets the telefone for this t_notificacao.
        /// </field>
        /// <field name="datanasc" type="Date">
        /// Gets or sets the datanasc for this t_notificacao.
        /// </field>
        /// <field name="idade" type="Number">
        /// Gets or sets the idade for this t_notificacao.
        /// </field>
        /// <field name="Sexo" type="String">
        /// Gets or sets the sexo for this t_notificacao.
        /// </field>
        /// <field name="gravidez" type="String">
        /// Gets or sets the gravidez for this t_notificacao.
        /// </field>
        /// <field name="data_mestruacao" type="Date">
        /// Gets or sets the data_mestruacao for this t_notificacao.
        /// </field>
        /// <field name="data_violencia" type="Date">
        /// Gets or sets the data_violencia for this t_notificacao.
        /// </field>
        /// <field name="hora_violencia" type="Object">
        /// Gets or sets the hora_violencia for this t_notificacao.
        /// </field>
        /// <field name="circunstancia" type="String">
        /// Gets or sets the circunstancia for this t_notificacao.
        /// </field>
        /// <field name="agressores" type="Number">
        /// Gets or sets the agressores for this t_notificacao.
        /// </field>
        /// <field name="relacao" type="String">
        /// Gets or sets the relacao for this t_notificacao.
        /// </field>
        /// <field name="condicao_exposta" type="Number">
        /// Gets or sets the condicao_exposta for this t_notificacao.
        /// </field>
        /// <field name="condicao_fonte" type="Number">
        /// Gets or sets the condicao_fonte for this t_notificacao.
        /// </field>
        /// <field name="comentario" type="String">
        /// Gets or sets the comentario for this t_notificacao.
        /// </field>
        /// <field name="Referencia" type="Number">
        /// Gets or sets the referencia for this t_notificacao.
        /// </field>
        /// <field name="data_inicial" type="Date">
        /// Gets or sets the data_inicial for this t_notificacao.
        /// </field>
        /// <field name="clinico" type="String">
        /// Gets or sets the clinico for this t_notificacao.
        /// </field>
        /// <field name="seguimentos" type="String">
        /// Gets or sets the seguimentos for this t_notificacao.
        /// </field>
        /// <field name="especifique" type="String">
        /// Gets or sets the especifique for this t_notificacao.
        /// </field>
        /// <field name="details" type="msls.application.t_notificacao.Details">
        /// Gets the details for this t_notificacao.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function t_referencia(entitySet) {
        /// <summary>
        /// Represents the t_referencia entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this t_referencia.
        /// </param>
        /// <field name="codreferencias" type="Number">
        /// Gets or sets the codreferencias for this t_referencia.
        /// </field>
        /// <field name="referencias" type="String">
        /// Gets or sets the referencias for this t_referencia.
        /// </field>
        /// <field name="details" type="msls.application.t_referencia.Details">
        /// Gets the details for this t_referencia.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function t_referido(entitySet) {
        /// <summary>
        /// Represents the t_referido entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this t_referido.
        /// </param>
        /// <field name="codreferido" type="Number">
        /// Gets or sets the codreferido for this t_referido.
        /// </field>
        /// <field name="referido" type="String">
        /// Gets or sets the referido for this t_referido.
        /// </field>
        /// <field name="details" type="msls.application.t_referido.Details">
        /// Gets the details for this t_referido.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function t_regimeppe(entitySet) {
        /// <summary>
        /// Represents the t_regimeppe entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this t_regimeppe.
        /// </param>
        /// <field name="codigo" type="Number">
        /// Gets or sets the codigo for this t_regimeppe.
        /// </field>
        /// <field name="regime" type="String">
        /// Gets or sets the regime for this t_regimeppe.
        /// </field>
        /// <field name="details" type="msls.application.t_regimeppe.Details">
        /// Gets the details for this t_regimeppe.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function t_registodiarioppe(entitySet) {
        /// <summary>
        /// Represents the t_registodiarioppe entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this t_registodiarioppe.
        /// </param>
        /// <field name="id" type="Number">
        /// Gets or sets the id for this t_registodiarioppe.
        /// </field>
        /// <field name="us" type="String">
        /// Gets or sets the us for this t_registodiarioppe.
        /// </field>
        /// <field name="nid" type="String">
        /// Gets or sets the nid for this t_registodiarioppe.
        /// </field>
        /// <field name="data" type="Date">
        /// Gets or sets the data for this t_registodiarioppe.
        /// </field>
        /// <field name="resultadohivExposta" type="Number">
        /// Gets or sets the resultadohivExposta for this t_registodiarioppe.
        /// </field>
        /// <field name="resultadohivfonte" type="Number">
        /// Gets or sets the resultadohivfonte for this t_registodiarioppe.
        /// </field>
        /// <field name="grauexposicao" type="Number">
        /// Gets or sets the grauexposicao for this t_registodiarioppe.
        /// </field>
        /// <field name="regimeppeprescrito" type="Number">
        /// Gets or sets the regimeppeprescrito for this t_registodiarioppe.
        /// </field>
        /// <field name="categoria" type="Number">
        /// Gets or sets the categoria for this t_registodiarioppe.
        /// </field>
        /// <field name="localacidente" type="Number">
        /// Gets or sets the localacidente for this t_registodiarioppe.
        /// </field>
        /// <field name="resultadoppe" type="Number">
        /// Gets or sets the resultadoppe for this t_registodiarioppe.
        /// </field>
        /// <field name="coduser" type="Number">
        /// Gets or sets the coduser for this t_registodiarioppe.
        /// </field>
        /// <field name="dataregisto" type="Date">
        /// Gets or sets the dataregisto for this t_registodiarioppe.
        /// </field>
        /// <field name="details" type="msls.application.t_registodiarioppe.Details">
        /// Gets the details for this t_registodiarioppe.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function t_registodiariovgb(entitySet) {
        /// <summary>
        /// Represents the t_registodiariovgb entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this t_registodiariovgb.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this t_registodiariovgb.
        /// </field>
        /// <field name="us" type="String">
        /// Gets or sets the us for this t_registodiariovgb.
        /// </field>
        /// <field name="Nid" type="String">
        /// Gets or sets the nid for this t_registodiariovgb.
        /// </field>
        /// <field name="Data" type="Date">
        /// Gets or sets the data for this t_registodiariovgb.
        /// </field>
        /// <field name="Referidode" type="Number">
        /// Gets or sets the referidode for this t_registodiariovgb.
        /// </field>
        /// <field name="ResultadoHIVExposta" type="Number">
        /// Gets or sets the resultadoHIVExposta for this t_registodiariovgb.
        /// </field>
        /// <field name="tipoviolencia" type="Number">
        /// Gets or sets the tipoviolencia for this t_registodiariovgb.
        /// </field>
        /// <field name="intervencao" type="Number">
        /// Gets or sets the intervencao for this t_registodiariovgb.
        /// </field>
        /// <field name="referencia" type="Number">
        /// Gets or sets the referencia for this t_registodiariovgb.
        /// </field>
        /// <field name="resultadoppe" type="Number">
        /// Gets or sets the resultadoppe for this t_registodiariovgb.
        /// </field>
        /// <field name="coduser" type="Number">
        /// Gets or sets the coduser for this t_registodiariovgb.
        /// </field>
        /// <field name="datareg" type="Date">
        /// Gets or sets the datareg for this t_registodiariovgb.
        /// </field>
        /// <field name="details" type="msls.application.t_registodiariovgb.Details">
        /// Gets the details for this t_registodiariovgb.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function t_resultadosppe(entitySet) {
        /// <summary>
        /// Represents the t_resultadosppe entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this t_resultadosppe.
        /// </param>
        /// <field name="codresultado" type="Number">
        /// Gets or sets the codresultado for this t_resultadosppe.
        /// </field>
        /// <field name="resultado" type="String">
        /// Gets or sets the resultado for this t_resultadosppe.
        /// </field>
        /// <field name="details" type="msls.application.t_resultadosppe.Details">
        /// Gets the details for this t_resultadosppe.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function t_resultadoteste(entitySet) {
        /// <summary>
        /// Represents the t_resultadoteste entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this t_resultadoteste.
        /// </param>
        /// <field name="codigo" type="Number">
        /// Gets or sets the codigo for this t_resultadoteste.
        /// </field>
        /// <field name="resultadoteste" type="String">
        /// Gets or sets the resultadoteste for this t_resultadoteste.
        /// </field>
        /// <field name="details" type="msls.application.t_resultadoteste.Details">
        /// Gets the details for this t_resultadoteste.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function t_seguimento_notificacao(entitySet) {
        /// <summary>
        /// Represents the t_seguimento_notificacao entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this t_seguimento_notificacao.
        /// </param>
        /// <field name="ordem" type="Number">
        /// Gets or sets the ordem for this t_seguimento_notificacao.
        /// </field>
        /// <field name="notificacao" type="String">
        /// Gets or sets the notificacao for this t_seguimento_notificacao.
        /// </field>
        /// <field name="id" type="Number">
        /// Gets or sets the id for this t_seguimento_notificacao.
        /// </field>
        /// <field name="descricao" type="String">
        /// Gets or sets the descricao for this t_seguimento_notificacao.
        /// </field>
        /// <field name="inicial" type="Date">
        /// Gets or sets the inicial for this t_seguimento_notificacao.
        /// </field>
        /// <field name="C2sem" type="Date">
        /// Gets or sets the c2sem for this t_seguimento_notificacao.
        /// </field>
        /// <field name="C4sem" type="Date">
        /// Gets or sets the c4sem for this t_seguimento_notificacao.
        /// </field>
        /// <field name="C6sem" type="Date">
        /// Gets or sets the c6sem for this t_seguimento_notificacao.
        /// </field>
        /// <field name="C3mes" type="Date">
        /// Gets or sets the c3mes for this t_seguimento_notificacao.
        /// </field>
        /// <field name="C6mes" type="Date">
        /// Gets or sets the c6mes for this t_seguimento_notificacao.
        /// </field>
        /// <field name="details" type="msls.application.t_seguimento_notificacao.Details">
        /// Gets the details for this t_seguimento_notificacao.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function t_tipoviolencia(entitySet) {
        /// <summary>
        /// Represents the t_tipoviolencia entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this t_tipoviolencia.
        /// </param>
        /// <field name="codigo" type="Number">
        /// Gets or sets the codigo for this t_tipoviolencia.
        /// </field>
        /// <field name="tipoviolencia" type="String">
        /// Gets or sets the tipoviolencia for this t_tipoviolencia.
        /// </field>
        /// <field name="details" type="msls.application.t_tipoviolencia.Details">
        /// Gets the details for this t_tipoviolencia.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function t_usItem(entitySet) {
        /// <summary>
        /// Represents the t_usItem entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this t_usItem.
        /// </param>
        /// <field name="id" type="Number">
        /// Gets or sets the id for this t_usItem.
        /// </field>
        /// <field name="codigo" type="String">
        /// Gets or sets the codigo for this t_usItem.
        /// </field>
        /// <field name="designacao" type="String">
        /// Gets or sets the designacao for this t_usItem.
        /// </field>
        /// <field name="distrito" type="String">
        /// Gets or sets the distrito for this t_usItem.
        /// </field>
        /// <field name="localidade" type="String">
        /// Gets or sets the localidade for this t_usItem.
        /// </field>
        /// <field name="activo" type="Boolean">
        /// Gets or sets the activo for this t_usItem.
        /// </field>
        /// <field name="provincia" type="String">
        /// Gets or sets the provincia for this t_usItem.
        /// </field>
        /// <field name="details" type="msls.application.t_usItem.Details">
        /// Gets the details for this t_usItem.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function t_user(entitySet) {
        /// <summary>
        /// Represents the t_user entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this t_user.
        /// </param>
        /// <field name="coduser" type="Number">
        /// Gets or sets the coduser for this t_user.
        /// </field>
        /// <field name="nome" type="String">
        /// Gets or sets the nome for this t_user.
        /// </field>
        /// <field name="login" type="String">
        /// Gets or sets the login for this t_user.
        /// </field>
        /// <field name="senha" type="String">
        /// Gets or sets the senha for this t_user.
        /// </field>
        /// <field name="datareg" type="Date">
        /// Gets or sets the datareg for this t_user.
        /// </field>
        /// <field name="data" type="Date">
        /// Gets or sets the data for this t_user.
        /// </field>
        /// <field name="details" type="msls.application.t_user.Details">
        /// Gets the details for this t_user.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function usuario(entitySet) {
        /// <summary>
        /// Represents the usuario entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this usuario.
        /// </param>
        /// <field name="id" type="String">
        /// Gets or sets the id for this usuario.
        /// </field>
        /// <field name="username" type="String">
        /// Gets or sets the username for this usuario.
        /// </field>
        /// <field name="name" type="String">
        /// Gets or sets the name for this usuario.
        /// </field>
        /// <field name="apelido" type="String">
        /// Gets or sets the apelido for this usuario.
        /// </field>
        /// <field name="password" type="String">
        /// Gets or sets the password for this usuario.
        /// </field>
        /// <field name="posicao" type="String">
        /// Gets or sets the posicao for this usuario.
        /// </field>
        /// <field name="systemrole" type="String">
        /// Gets or sets the systemrole for this usuario.
        /// </field>
        /// <field name="details" type="msls.application.usuario.Details">
        /// Gets the details for this usuario.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ApplicationData(dataWorkspace) {
        /// <summary>
        /// Represents the ApplicationData data service.
        /// </summary>
        /// <param name="dataWorkspace" type="msls.DataWorkspace">
        /// The data workspace that created this data service.
        /// </param>
        /// <field name="details" type="msls.application.ApplicationData.Details">
        /// Gets the details for this data service.
        /// </field>
        $DataService.call(this, dataWorkspace);
    };

    function dbmanualsourceData(dataWorkspace) {
        /// <summary>
        /// Represents the dbmanualsourceData data service.
        /// </summary>
        /// <param name="dataWorkspace" type="msls.DataWorkspace">
        /// The data workspace that created this data service.
        /// </param>
        /// <field name="amostrastbs" type="msls.EntitySet">
        /// Gets the amostrastbs entity set.
        /// </field>
        /// <field name="ccrs" type="msls.EntitySet">
        /// Gets the ccrs entity set.
        /// </field>
        /// <field name="ccrsegs" type="msls.EntitySet">
        /// Gets the ccrsegs entity set.
        /// </field>
        /// <field name="children" type="msls.EntitySet">
        /// Gets the children entity set.
        /// </field>
        /// <field name="cpn_finals" type="msls.EntitySet">
        /// Gets the cpn_finals entity set.
        /// </field>
        /// <field name="cpn_olds" type="msls.EntitySet">
        /// Gets the cpn_olds entity set.
        /// </field>
        /// <field name="cpns" type="msls.EntitySet">
        /// Gets the cpns entity set.
        /// </field>
        /// <field name="cpps" type="msls.EntitySet">
        /// Gets the cpps entity set.
        /// </field>
        /// <field name="csr_pfs" type="msls.EntitySet">
        /// Gets the csr_pfs entity set.
        /// </field>
        /// <field name="laboratoriotbs" type="msls.EntitySet">
        /// Gets the laboratoriotbs entity set.
        /// </field>
        /// <field name="livroes" type="msls.EntitySet">
        /// Gets the livroes entity set.
        /// </field>
        /// <field name="maternidades" type="msls.EntitySet">
        /// Gets the maternidades entity set.
        /// </field>
        /// <field name="mothers" type="msls.EntitySet">
        /// Gets the mothers entity set.
        /// </field>
        /// <field name="paciente_resistente_tbs" type="msls.EntitySet">
        /// Gets the paciente_resistente_tbs entity set.
        /// </field>
        /// <field name="pacientetbs" type="msls.EntitySet">
        /// Gets the pacientetbs entity set.
        /// </field>
        /// <field name="patients" type="msls.EntitySet">
        /// Gets the patients entity set.
        /// </field>
        /// <field name="t_categorias" type="msls.EntitySet">
        /// Gets the t_categorias entity set.
        /// </field>
        /// <field name="t_grauexposicaos" type="msls.EntitySet">
        /// Gets the t_grauexposicaos entity set.
        /// </field>
        /// <field name="t_historia_clinica_notificacaos" type="msls.EntitySet">
        /// Gets the t_historia_clinica_notificacaos entity set.
        /// </field>
        /// <field name="t_historiaclinicas" type="msls.EntitySet">
        /// Gets the t_historiaclinicas entity set.
        /// </field>
        /// <field name="t_intervencoes" type="msls.EntitySet">
        /// Gets the t_intervencoes entity set.
        /// </field>
        /// <field name="t_laboratorio_notificacaos" type="msls.EntitySet">
        /// Gets the t_laboratorio_notificacaos entity set.
        /// </field>
        /// <field name="t_localacidentes" type="msls.EntitySet">
        /// Gets the t_localacidentes entity set.
        /// </field>
        /// <field name="t_notificacaos" type="msls.EntitySet">
        /// Gets the t_notificacaos entity set.
        /// </field>
        /// <field name="t_referencias" type="msls.EntitySet">
        /// Gets the t_referencias entity set.
        /// </field>
        /// <field name="t_referidoes" type="msls.EntitySet">
        /// Gets the t_referidoes entity set.
        /// </field>
        /// <field name="t_regimeppes" type="msls.EntitySet">
        /// Gets the t_regimeppes entity set.
        /// </field>
        /// <field name="t_registodiarioppes" type="msls.EntitySet">
        /// Gets the t_registodiarioppes entity set.
        /// </field>
        /// <field name="t_registodiariovgbs" type="msls.EntitySet">
        /// Gets the t_registodiariovgbs entity set.
        /// </field>
        /// <field name="t_resultadosppes" type="msls.EntitySet">
        /// Gets the t_resultadosppes entity set.
        /// </field>
        /// <field name="t_resultadotestes" type="msls.EntitySet">
        /// Gets the t_resultadotestes entity set.
        /// </field>
        /// <field name="t_seguimento_notificacaos" type="msls.EntitySet">
        /// Gets the t_seguimento_notificacaos entity set.
        /// </field>
        /// <field name="t_tipoviolencias" type="msls.EntitySet">
        /// Gets the t_tipoviolencias entity set.
        /// </field>
        /// <field name="t_us" type="msls.EntitySet">
        /// Gets the t_us entity set.
        /// </field>
        /// <field name="t_users" type="msls.EntitySet">
        /// Gets the t_users entity set.
        /// </field>
        /// <field name="usuarios" type="msls.EntitySet">
        /// Gets the usuarios entity set.
        /// </field>
        /// <field name="details" type="msls.application.dbmanualsourceData.Details">
        /// Gets the details for this data service.
        /// </field>
        $DataService.call(this, dataWorkspace);
    };
    function DataWorkspace() {
        /// <summary>
        /// Represents the data workspace.
        /// </summary>
        /// <field name="ApplicationData" type="msls.application.ApplicationData">
        /// Gets the ApplicationData data service.
        /// </field>
        /// <field name="dbmanualsourceData" type="msls.application.dbmanualsourceData">
        /// Gets the dbmanualsourceData data service.
        /// </field>
        /// <field name="details" type="msls.application.DataWorkspace.Details">
        /// Gets the details for this data workspace.
        /// </field>
        $DataWorkspace.call(this);
    };

    msls._addToNamespace("msls.application", {

        amostrastb: $defineEntity(amostrastb, [
            { name: "id", type: String, isReadOnly: true },
            { name: "numordem", type: String },
            { name: "datarecepcao", type: Date },
            { name: "nit_nid", type: String },
            { name: "NIT", type: String },
            { name: "NID", type: String },
            { name: "nome", type: String },
            { name: "sexo", type: String },
            { name: "idade", type: Number },
            { name: "residencia", type: String },
            { name: "telefone", type: String },
            { name: "proveniencia", type: String },
            { name: "tipoamostra", type: String },
            { name: "causarejeicao", type: String },
            { name: "tipodoente", type: String },
            { name: "motivoexame", type: String },
            { name: "mescontrolo", type: Number },
            { name: "usreferencia", type: String },
            { name: "dataenvio", type: Date },
            { name: "examesolicitado", type: String },
            { name: "iniciaistecnicoenvio", type: String },
            { name: "bkresultado1", type: String },
            { name: "bkdatarecepcao1", type: Date },
            { name: "bkresultado2", type: String },
            { name: "bkdatarecepcao2", type: Date },
            { name: "xpertresultado", type: String },
            { name: "xpertdatarecepcao", type: Date },
            { name: "rifresultado", type: String },
            { name: "rifdatarecepcao", type: Date },
            { name: "lpa1h_resultado", type: String },
            { name: "lpa1r_resultado", type: String },
            { name: "lpa1datarecepcao", type: Date },
            { name: "lpa2fq_resultado", type: String },
            { name: "lpa2ag_resultado", type: String },
            { name: "lpa2datarecepcao", type: Date },
            { name: "cultura", type: String },
            { name: "culturadatarecepcao", type: Date },
            { name: "idetinficacao", type: String },
            { name: "identificacaodata", type: Date },
            { name: "tsa1h_resultado", type: String },
            { name: "tsa1s_resultado", type: String },
            { name: "tsa1r_resultado", type: String },
            { name: "tsa1e_resultado", type: String },
            { name: "tsa1z_resultado", type: String },
            { name: "tsa1datarecepcao", type: Date },
            { name: "tsa2ofl_resultado", type: String },
            { name: "tsa2mox_resultado", type: String },
            { name: "tsa2kan_resultado", type: String },
            { name: "tsa2amk_resultado", type: String },
            { name: "tsa2cap_resultado", type: String },
            { name: "tsa2datarecepcao", type: Date },
            { name: "dataenvioresultado", type: Date },
            { name: "iniciaistecnicodevolve", type: String },
            { name: "obs", type: String }
        ]),

        ccr: $defineEntity(ccr, [
            { name: "id", type: Number, isReadOnly: true },
            { name: "nyear", type: Number },
            { name: "nlivro", type: String },
            { name: "nr_consulta", type: Number },
            { name: "dataconsulta", type: Date },
            { name: "age", type: Number },
            { name: "ageunit", type: String },
            { name: "mot_nid_cpn", type: String },
            { name: "mot_nid_tarv", type: String },
            { name: "mot_hiv_lact", type: Boolean },
            { name: "mot_hiv_tarv", type: Boolean },
            { name: "contactotb", type: Boolean },
            { name: "desnutricao_aguda", type: String },
            { name: "exposicaoHIV", type: Boolean },
            { name: "outracondicaorisco", type: String },
            { name: "pisoniazidainicio", type: Date },
            { name: "pisoniazida", type: String },
            { name: "aleitmaternomenor6m", type: String },
            { name: "aleitmaternonaior6m", type: Boolean },
            { name: "atpu", type: Number },
            { name: "csb_nut_sup", type: Boolean },
            { name: "recuperada", type: Boolean },
            { name: "internamento", type: Boolean },
            { name: "ctz", type: String },
            { name: "profiaxia_arv", type: Boolean },
            { name: "colheitapcmaior2mes", type: String },
            { name: "colheitapcrmenor2mes", type: String },
            { name: "resultadopcrmaior2meses", type: String },
            { name: "resultadopcrmenor2meses", type: String },
            { name: "resultadotesterapido", type: String },
            { name: "resultadofinal", type: String },
            { name: "resulttrapido_nexp", type: String },
            { name: "saidaccr", type: String },
            { name: "chd_nid_tarv", type: String },
            { name: "obs", type: String },
            { name: "providername", type: String },
            { name: "motart_5m_chd", type: Boolean },
            { name: "tb", type: Boolean },
            { name: "dam_dag", type: String },
            { name: "ce", type: Boolean },
            { name: "tpicomp", type: Boolean },
            { name: "ame_5m", type: Boolean },
            { name: "mixed_5m", type: Boolean },
            { name: "rec", type: Boolean },
            { name: "trans_int", type: Boolean },
            { name: "arv_5m", type: Boolean },
            { name: "pcr_under2m", type: Boolean },
            { name: "pcr_above2m", type: Boolean },
            { name: "pcrpos_under2m", type: Boolean },
            { name: "pcrpos_above2m", type: Boolean },
            { name: "pnctl", type: Boolean },
            { name: "ccrsegs", kind: "collection", elementType: ccrseg },
            { name: "child", kind: "reference", type: child }
        ]),

        ccrseg: $defineEntity(ccrseg, [
            { name: "id", type: Number, isReadOnly: true },
            { name: "idchild", type: Number },
            { name: "mothTarv5moth", type: String },
            { name: "ame5m", type: Boolean },
            { name: "am5m", type: Boolean },
            { name: "recuperada", type: Boolean },
            { name: "transinter", type: Boolean },
            { name: "arv5m", type: Boolean },
            { name: "pcrmen2m", type: Boolean },
            { name: "pcrmai2m", type: Boolean },
            { name: "pcrposmen2m", type: Boolean },
            { name: "pcrposmai2m", type: Boolean },
            { name: "tb", type: Boolean },
            { name: "dam", type: Boolean },
            { name: "dag", type: Boolean },
            { name: "ce9m", type: Boolean },
            { name: "pnctl", type: Boolean },
            { name: "tpi", type: Boolean },
            { name: "abandono9", type: Boolean },
            { name: "obito9", type: Boolean },
            { name: "ce18m", type: Boolean },
            { name: "resultado18", type: Boolean },
            { name: "transferidaCCS", type: Boolean },
            { name: "transferidaCI", type: Boolean },
            { name: "transferidaUS", type: Boolean },
            { name: "abandono18", type: Boolean },
            { name: "obito18", type: Boolean },
            { name: "ccr", kind: "reference", type: ccr }
        ]),

        child: $defineEntity(child, [
            { name: "id", type: Number, isReadOnly: true },
            { name: "nid_ccr", type: String },
            { name: "name", type: String },
            { name: "residence", type: String },
            { name: "gender", type: String },
            { name: "phone", type: String },
            { name: "mot_nid_cpn", type: String },
            { name: "dob", type: Date },
            { name: "ccrs", kind: "collection", elementType: ccr }
        ]),

        cpn_final: $defineEntity(cpn_final, [
            { name: "id", type: String, isReadOnly: true },
            { name: "idmother", type: String },
            { name: "nlivro", type: String },
            { name: "cons_more4", type: Boolean },
            { name: "partnerpreence", type: Boolean },
            { name: "weightgainyno", type: String },
            { name: "dag", type: Boolean },
            { name: "dam", type: Boolean },
            { name: "supnutr", type: String },
            { name: "resultcured", type: String },
            { name: "resultabandon", type: String },
            { name: "receiveddesparasitante", type: String },
            { name: "salferr_more3", type: Boolean },
            { name: "its_diag", type: Boolean },
            { name: "its_treatment", type: String },
            { name: "its_syphilistesting", type: String },
            { name: "its_wsyphilistreat", type: Boolean },
            { name: "its_psyphilistreat", type: String },
            { name: "womanserostatus", type: String },
            { name: "partnerserostatus", type: String },
            { name: "ctz_entr", type: Boolean },
            { name: "ctz_init", type: Boolean },
            { name: "finalresult_arv", type: String },
            { name: "tip", type: String },
            { name: "bednet", type: String },
            { name: "mal_diag_lab", type: String },
            { name: "mal_treatment", type: String },
            { name: "mp", type: String },
            { name: "vat_1_dose", type: Boolean },
            { name: "vat_2_5_dose", type: Boolean },
            { name: "tb_isoniazid", type: Boolean },
            { name: "tb_treatment", type: Boolean }
        ]),

        cpn_old: $defineEntity(cpn_old, [
            { name: "id", type: String },
            { name: "nyear", type: Number },
            { name: "visdate1", type: Date },
            { name: "visdate2", type: Date },
            { name: "visdate3", type: Date },
            { name: "visdate4", type: Date },
            { name: "visdate5", type: Date },
            { name: "visdate6", type: Date },
            { name: "nid_cpn", type: String },
            { name: "nid_tarv", type: String },
            { name: "name", type: String },
            { name: "residence", type: String },
            { name: "phone", type: String },
            { name: "agegroup1", type: Boolean },
            { name: "agegroup2", type: Boolean },
            { name: "agegroup3", type: Boolean },
            { name: "agegroup4", type: Boolean },
            { name: "gestationalage1", type: Number },
            { name: "gestationalage2", type: Number },
            { name: "gestationalage3", type: Number },
            { name: "gestationalage4", type: Number },
            { name: "gestationalage5", type: Number },
            { name: "gestationalage6", type: Number },
            { name: "gageless12", type: Boolean },
            { name: "partnerpresence1", type: Boolean },
            { name: "partnerpresence2", type: Boolean },
            { name: "partnerpresence3", type: Boolean },
            { name: "partnerpresence4", type: Boolean },
            { name: "partnerpresence5", type: Boolean },
            { name: "partnerpresence6", type: Boolean },
            { name: "weight1", type: Number },
            { name: "weight2", type: Number },
            { name: "weight3", type: Number },
            { name: "weight4", type: Number },
            { name: "weight5", type: Number },
            { name: "weight6", type: Number },
            { name: "weightgainyno2", type: String },
            { name: "weightgainyno3", type: String },
            { name: "weightgainyno4", type: String },
            { name: "weightgainyno5", type: String },
            { name: "weightgainyno6", type: String },
            { name: "dag1", type: Boolean },
            { name: "dag2", type: Boolean },
            { name: "dag3", type: Boolean },
            { name: "dag4", type: Boolean },
            { name: "dag5", type: Boolean },
            { name: "dag6", type: Boolean },
            { name: "dam1", type: Boolean },
            { name: "dam2", type: Boolean },
            { name: "dam3", type: Boolean },
            { name: "dam4", type: Boolean },
            { name: "dam5", type: Boolean },
            { name: "dam6", type: Boolean },
            { name: "supnutr1", type: Number },
            { name: "supnutr2", type: Number },
            { name: "supnutr3", type: Number },
            { name: "supnutr4", type: Number },
            { name: "supnutr5", type: Number },
            { name: "supnutr6", type: Number },
            { name: "resultcured2", type: String },
            { name: "resultcured3", type: String },
            { name: "resultcured4", type: String },
            { name: "resultcured5", type: String },
            { name: "resultcured6", type: String },
            { name: "resultabandon2", type: String },
            { name: "resultabandon3", type: String },
            { name: "resultabandon4", type: String },
            { name: "resultabandon5", type: String },
            { name: "resultabandon6", type: String },
            { name: "receiveddesparasitante1", type: String },
            { name: "receiveddesparasitante2", type: String },
            { name: "receiveddesparasitante3", type: String },
            { name: "receiveddesparasitante4", type: String },
            { name: "receiveddesparasitante5", type: String },
            { name: "receiveddesparasitante6", type: String },
            { name: "salferr_acfolico1", type: String },
            { name: "salferr_acfolico2", type: String },
            { name: "salferr_acfolico3", type: String },
            { name: "salferr_acfolico4", type: String },
            { name: "salferr_acfolico5", type: String },
            { name: "salferr_acfolico6", type: String },
            { name: "ta1", type: String },
            { name: "ta2", type: String },
            { name: "ta3", type: String },
            { name: "ta4", type: String },
            { name: "ta5", type: String },
            { name: "ta6", type: String },
            { name: "hgb1", type: String },
            { name: "hgb2", type: String },
            { name: "hgb3", type: String },
            { name: "hgb4", type: String },
            { name: "hgb5", type: String },
            { name: "hgb6", type: String },
            { name: "proteinuria1", type: String },
            { name: "proteinuria2", type: String },
            { name: "proteinuria3", type: String },
            { name: "proteinuria4", type: String },
            { name: "proteinuria5", type: String },
            { name: "proteinuria6", type: String },
            { name: "glicosuria1", type: String },
            { name: "glicosuria2", type: String },
            { name: "glicosuria3", type: String },
            { name: "glicosuria4", type: String },
            { name: "glicosuria5", type: String },
            { name: "glicosuria6", type: String },
            { name: "its_ulceragenital1", type: Boolean },
            { name: "its_ulceragenital2", type: Boolean },
            { name: "its_ulceragenital3", type: Boolean },
            { name: "its_ulceragenital4", type: Boolean },
            { name: "its_ulceragenital5", type: Boolean },
            { name: "its_ulceragenital6", type: Boolean },
            { name: "its_leucorreia1", type: Boolean },
            { name: "its_leucorreia2", type: Boolean },
            { name: "its_leucorreia3", type: Boolean },
            { name: "its_leucorreia4", type: Boolean },
            { name: "its_leucorreia5", type: Boolean },
            { name: "its_leucorreia6", type: Boolean },
            { name: "its_syndromictreatment1", type: String },
            { name: "its_syndromictreatment2", type: String },
            { name: "its_syndromictreatment3", type: String },
            { name: "its_syndromictreatment4", type: String },
            { name: "its_syndromictreatment5", type: String },
            { name: "its_syndromictreatment6", type: String },
            { name: "its_syphilistesting1", type: String },
            { name: "its_syphilistesting2", type: String },
            { name: "its_syphilistesting3", type: String },
            { name: "its_syphilistesting4", type: String },
            { name: "its_syphilistesting5", type: String },
            { name: "its_syphilistesting6", type: String },
            { name: "its_wsyphilistreat1", type: String },
            { name: "its_wsyphilistreat2", type: String },
            { name: "its_wsyphilistreat3", type: String },
            { name: "its_wsyphilistreat4", type: String },
            { name: "its_wsyphilistreat5", type: String },
            { name: "its_wsyphilistreat6", type: String },
            { name: "its_psyphilistreat1", type: String },
            { name: "its_psyphilistreat2", type: String },
            { name: "its_psyphilistreat3", type: String },
            { name: "its_psyphilistreat4", type: String },
            { name: "its_psyphilistreat5", type: String },
            { name: "its_psyphilistreat6", type: String },
            { name: "serostatusdesc", type: Boolean },
            { name: "serostatusneg", type: Boolean },
            { name: "serostatuspos", type: Boolean },
            { name: "cpnhivtest1", type: String },
            { name: "cpnhivtest2", type: String },
            { name: "cpnhivtest3", type: String },
            { name: "cpnhivtest4", type: String },
            { name: "cpnhivtest5", type: String },
            { name: "cpnhivtest6", type: String },
            { name: "partnerhivtest1", type: String },
            { name: "partnerhivtest2", type: String },
            { name: "partnerhivtest3", type: String },
            { name: "partnerhivtest4", type: String },
            { name: "partnerhivtest5", type: String },
            { name: "partnerhivtest6", type: String },
            { name: "ctz", type: Boolean },
            { name: "ctz_init_cont1", type: String },
            { name: "ctz_init_cont2", type: String },
            { name: "ctz_init_cont3", type: String },
            { name: "ctz_init_cont4", type: String },
            { name: "ctz_init_cont5", type: String },
            { name: "ctz_init_cont6", type: String },
            { name: "tarv", type: Boolean },
            { name: "nvp1", type: Boolean },
            { name: "nvp2", type: Boolean },
            { name: "nvp3", type: Boolean },
            { name: "nvp4", type: Boolean },
            { name: "nvp5", type: Boolean },
            { name: "nvp6", type: Boolean },
            { name: "azt_nvp1", type: Boolean },
            { name: "azt_nvp2", type: Boolean },
            { name: "azt_nvp3", type: Boolean },
            { name: "azt_nvp4", type: Boolean },
            { name: "azt_nvp5", type: Boolean },
            { name: "azt_nvp6", type: Boolean },
            { name: "tarv_init_visit1", type: Boolean },
            { name: "tarv_init_visit2", type: Boolean },
            { name: "tarv_init_visit3", type: Boolean },
            { name: "tarv_init_visit4", type: Boolean },
            { name: "tarv_init_visit5", type: Boolean },
            { name: "tarv_init_visit6", type: Boolean },
            { name: "arv_cont2", type: Boolean },
            { name: "arv_cont3", type: Boolean },
            { name: "arv_cont4", type: Boolean },
            { name: "arv_cont5", type: Boolean },
            { name: "arv_cont6", type: Boolean },
            { name: "tip1", type: String },
            { name: "tip2", type: String },
            { name: "tip3", type: String },
            { name: "tip4", type: String },
            { name: "tip5", type: String },
            { name: "tip6", type: String },
            { name: "bednet1", type: String },
            { name: "bednet2", type: String },
            { name: "bednet3", type: String },
            { name: "bednet4", type: String },
            { name: "bednet5", type: String },
            { name: "bednet6", type: String },
            { name: "tdr_htz1", type: String },
            { name: "tdr_htz2", type: String },
            { name: "tdr_htz3", type: String },
            { name: "tdr_htz4", type: String },
            { name: "tdr_htz5", type: String },
            { name: "tdr_htz6", type: String },
            { name: "result_tdr_htz1", type: String },
            { name: "result_tdr_htz2", type: String },
            { name: "result_tdr_htz3", type: String },
            { name: "result_tdr_htz4", type: String },
            { name: "result_tdr_htz5", type: String },
            { name: "result_tdr_htz6", type: String },
            { name: "pos_malaria_treated1", type: String },
            { name: "pos_malaria_treated2", type: String },
            { name: "pos_malaria_treated3", type: String },
            { name: "pos_malaria_treated4", type: String },
            { name: "pos_malaria_treated5", type: String },
            { name: "pos_malaria_treated6", type: String },
            { name: "hpp1", type: String },
            { name: "hpp2", type: String },
            { name: "hpp3", type: String },
            { name: "hpp4", type: String },
            { name: "hpp5", type: String },
            { name: "hpp6", type: String },
            { name: "vat_1_dose1", type: Boolean },
            { name: "vat_1_dose2", type: Boolean },
            { name: "vat_1_dose3", type: Boolean },
            { name: "vat_1_dose4", type: Boolean },
            { name: "vat_1_dose5", type: Boolean },
            { name: "vat_1_dose6", type: Boolean },
            { name: "vat_2_5_dose1", type: Boolean },
            { name: "vat_2_5_dose2", type: Boolean },
            { name: "vat_2_5_dose3", type: Boolean },
            { name: "vat_2_5_dose4", type: Boolean },
            { name: "vat_2_5_dose5", type: Boolean },
            { name: "vat_2_5_dose6", type: Boolean },
            { name: "tb_isoniazid1", type: String },
            { name: "tb_isoniazid2", type: String },
            { name: "tb_isoniazid3", type: String },
            { name: "tb_isoniazid4", type: String },
            { name: "tb_isoniazid5", type: String },
            { name: "tb_isoniazid6", type: String },
            { name: "tb_treatment1", type: String },
            { name: "tb_treatment2", type: String },
            { name: "tb_treatment3", type: String },
            { name: "tb_treatment4", type: String },
            { name: "tb_treatment5", type: String },
            { name: "tb_treatment6", type: String },
            { name: "obs1", type: String },
            { name: "obs2", type: String },
            { name: "obs3", type: String },
            { name: "obs4", type: String },
            { name: "obs5", type: String },
            { name: "obs6", type: String },
            { name: "providername1", type: String },
            { name: "providername2", type: String },
            { name: "providername3", type: String },
            { name: "providername4", type: String },
            { name: "providername5", type: String },
            { name: "providername6", type: String },
            { name: "cons_more4", type: Boolean },
            { name: "partnerpreence", type: Boolean },
            { name: "weightgainyno", type: String },
            { name: "dag", type: Boolean },
            { name: "dam", type: Boolean },
            { name: "supnutr", type: String },
            { name: "resultcured", type: String },
            { name: "resultabandon", type: String },
            { name: "receiveddesparasitante", type: String },
            { name: "salferr_more3", type: Boolean },
            { name: "its_diag", type: Boolean },
            { name: "its_treatment", type: String },
            { name: "its_syphilistesting", type: String },
            { name: "its_wsyphilistreat", type: Boolean },
            { name: "its_psyphilistreat", type: String },
            { name: "womanserostatus", type: String },
            { name: "partnerserostatus", type: String },
            { name: "ctz_entr", type: Boolean },
            { name: "ctz_init", type: Boolean },
            { name: "finalresult_arv", type: String },
            { name: "tip", type: String },
            { name: "bednet", type: String },
            { name: "mal_diag_lab", type: String },
            { name: "mal_treatment", type: String },
            { name: "mp", type: String },
            { name: "vat_1_dose", type: Boolean },
            { name: "vat_2_5_dose", type: Boolean },
            { name: "inh", type: Boolean },
            { name: "tb_initto", type: Boolean },
            { name: "nlivro", type: String },
            { name: "idmother", type: String }
        ]),

        cpn: $defineEntity(cpn, [
            { name: "id", type: String, isReadOnly: true },
            { name: "nr_consulta", type: Number },
            { name: "idmother", type: String },
            { name: "nlivro", type: String },
            { name: "nyear", type: Number },
            { name: "visdate", type: Date },
            { name: "agegroup", type: String },
            { name: "gestationalage", type: Number },
            { name: "gageless12", type: Boolean },
            { name: "partnerpresence", type: Boolean },
            { name: "weight", type: Number },
            { name: "weightgainyno", type: String },
            { name: "dag", type: Boolean },
            { name: "dam", type: Boolean },
            { name: "supnutr", type: Number },
            { name: "resultcured", type: String },
            { name: "resultabandon", type: String },
            { name: "receiveddesparasitante", type: String },
            { name: "salferr_acfolico", type: String },
            { name: "ta", type: String },
            { name: "hgb", type: String },
            { name: "proteinuria", type: String },
            { name: "glicosuria", type: String },
            { name: "its_ulceragenital", type: Boolean },
            { name: "its_leucorreia", type: Boolean },
            { name: "its_syndromictreatment", type: String },
            { name: "its_syphilistesting", type: String },
            { name: "its_wsyphilistreat", type: String },
            { name: "its_psyphilistreat", type: String },
            { name: "its_syphilistratmentmulhr", type: String },
            { name: "its_syphilistratmentparceir", type: String },
            { name: "serostatusentcpn", type: String },
            { name: "cpnhivtest", type: String },
            { name: "partnerhivtest", type: String },
            { name: "ctz", type: Boolean },
            { name: "ctz_init_cont", type: String },
            { name: "tarv", type: Boolean },
            { name: "nvp", type: Boolean },
            { name: "azt_nvp", type: Boolean },
            { name: "em_tarv_entrada", type: Boolean },
            { name: "tarv_init_visit", type: Boolean },
            { name: "arv_cont", type: Boolean },
            { name: "tip", type: String },
            { name: "bednet", type: String },
            { name: "tdr_htz", type: String },
            { name: "result_tdr_htz", type: String },
            { name: "pos_malaria_treated", type: String },
            { name: "hpp", type: String },
            { name: "vat_1_dose", type: Boolean },
            { name: "vat_2_5_dose", type: Boolean },
            { name: "tb_isoniazid", type: String },
            { name: "tb_treatment", type: String },
            { name: "obs", type: String },
            { name: "providername", type: String }
        ]),

        cpp: $defineEntity(cpp, [
            { name: "id", type: String, isReadOnly: true },
            { name: "nr_consulta", type: Number },
            { name: "idmother", type: String },
            { name: "nlivro", type: String },
            { name: "visdate", type: Date },
            { name: "age", type: Number },
            { name: "localparto", type: String },
            { name: "diasapoisparto", type: String },
            { name: "parceiropresente", type: Number },
            { name: "estadorecemnascido", type: String },
            { name: "anemia", type: Boolean },
            { name: "e_clinicogenecologico", type: String },
            { name: "outrapatologia", type: String },
            { name: "dag_dam", type: String },
            { name: "suplementonutricional", type: String },
            { name: "transferida", type: Boolean },
            { name: "almaternoexclusivo", type: String },
            { name: "testemalaria", type: String },
            { name: "resultado_TDR_HTZ", type: String },
            { name: "puerperamalariatratada", type: String },
            { name: "estadoentradacpp", type: String },
            { name: "resultadocpp", type: String },
            { name: "dosepuerpera", type: String },
            { name: "iniciottosifiliscpp", type: String },
            { name: "parceirottocpp", type: String },
            { name: "seroestadoentradacpp", type: String },
            { name: "testehivconsultacpp", type: String },
            { name: "emtarv", type: Boolean },
            { name: "iniciatarv", type: Boolean },
            { name: "continuatarv", type: Boolean },
            { name: "rn_tarv", type: Boolean },
            { name: "testehivparceiro", type: String },
            { name: "ttopuerpera", type: String },
            { name: "rntto", type: String },
            { name: "vitAcpp", type: String },
            { name: "salferroso_acfolico", type: String },
            { name: "transfistula", type: String },
            { name: "rnccr", type: String },
            { name: "transcsr_pf", type: String },
            { name: "obs", type: String },
            { name: "providername", type: String }
        ]),

        csr_pf: $defineEntity(csr_pf, [
            { name: "id", type: String, isReadOnly: true },
            { name: "nr_consulta", type: Number }
        ]),

        laboratoriotb: $defineEntity(laboratoriotb, [
            { name: "id", type: String, isReadOnly: true },
            { name: "ano", type: Number },
            { name: "mes", type: Number },
            { name: "numlab", type: String },
            { name: "nit_nid", type: String },
            { name: "NIT", type: String },
            { name: "NID", type: String },
            { name: "nome", type: String },
            { name: "sexo", type: String },
            { name: "idade", type: Number },
            { name: "residencia", type: String },
            { name: "ocupacao", type: String },
            { name: "telefone", type: String },
            { name: "usreferencia", type: String },
            { name: "proveniencia", type: String },
            { name: "HIV", type: String },
            { name: "ot_imunodepressao", type: String },
            { name: "tipodoente", type: String },
            { name: "motivoexame", type: String },
            { name: "mescontrolo", type: Number },
            { name: "examesolicitado", type: String },
            { name: "datacolheita1", type: Date },
            { name: "datacolheita2", type: Date },
            { name: "datarecepcao1", type: Date },
            { name: "datarecepcao2", type: Date },
            { name: "tipoamostra", type: String },
            { name: "aspectomicro1", type: String },
            { name: "aspectomicro2", type: String },
            { name: "resultadobk1", type: String },
            { name: "dataresultadobk1", type: Date },
            { name: "resultadobk2", type: String },
            { name: "dataresultadobk2", type: Date },
            { name: "resultadomtb", type: String },
            { name: "dataresultadomtb", type: Date },
            { name: "resultadorif", type: String },
            { name: "dataresultadorif", type: Date },
            { name: "repetirxpert", type: String },
            { name: "iniciaistecinico", type: String },
            { name: "obs", type: String }
        ]),

        livro: $defineEntity(livro, [
            { name: "nlivro", type: String },
            { name: "provincia", type: String },
            { name: "distrito", type: String },
            { name: "uscode", type: String },
            { name: "usname", type: String },
            { name: "initdate", type: Date },
            { name: "tipolivro", type: String },
            { name: "ID", type: Number }
        ]),

        maternidade: $defineEntity(maternidade, [
            { name: "id", type: Number, isReadOnly: true },
            { name: "admissiondate", type: Date },
            { name: "admissionhr", type: Object },
            { name: "nid_cpn", type: String },
            { name: "nid_tarv", type: String },
            { name: "name", type: String },
            { name: "transfer", type: String },
            { name: "age", type: Number },
            { name: "gestbirth", type: String },
            { name: "gestage", type: Number },
            { name: "serostatus_unk", type: Boolean },
            { name: "serostatus_neg3m", type: Boolean },
            { name: "serostatus_pos", type: Boolean },
            { name: "cpn_arv_init", type: Boolean },
            { name: "mat_hiv_testing", type: String },
            { name: "triprofilafia", type: Boolean },
            { name: "tarv_init_entr", type: Boolean },
            { name: "tarv_init_matern", type: Boolean },
            { name: "delivdate", type: Date },
            { name: "delivhr", type: Object },
            { name: "freq_fpos", type: Boolean },
            { name: "fneg", type: Boolean },
            { name: "eutocic", type: Boolean },
            { name: "ventosa", type: Boolean },
            { name: "caesarean", type: Boolean },
            { name: "oth_dystocia", type: Boolean },
            { name: "activeman3stag", type: Boolean },
            { name: "manual_plac_remove", type: Boolean },
            { name: "ceasarean_plac_remove", type: Boolean },
            { name: "delivcomp", type: Boolean },
            { name: "vertical_deliv", type: Boolean },
            { name: "partogr_filled", type: Boolean },
            { name: "plac_previa", type: Boolean },
            { name: "detach_plac", type: Boolean },
            { name: "uterineatony", type: Boolean },
            { name: "placreten", type: Boolean },
            { name: "laceration", type: Boolean },
            { name: "out_rupt_uter", type: Boolean },
            { name: "maternity_rupt_uter", type: Boolean },
            { name: "tp_matern_local", type: Boolean },
            { name: "tp_arrastado", type: Boolean },
            { name: "pre_enclapsiasevera", type: Boolean },
            { name: "C_eclampsia", type: Boolean },
            { name: "sepsis", type: Boolean },
            { name: "ot_complications", type: Boolean },
            { name: "malaria", type: Boolean },
            { name: "anemia", type: String },
            { name: "hiv_sida", type: Boolean },
            { name: "tb", type: Boolean },
            { name: "poisontrademed", type: Boolean },
            { name: "ot_complications2", type: Boolean },
            { name: "maternaldeath", type: Boolean },
            { name: "maternaldeathcause", type: String },
            { name: "pi_antibiotics", type: Boolean },
            { name: "ev_im_pphemor", type: Boolean },
            { name: "antihypertensive", type: Boolean },
            { name: "magn_sulphate", type: Boolean },
            { name: "intrauterine_asp", type: Boolean },
            { name: "bloodtransf", type: Boolean },
            { name: "hyster_obstetric", type: Boolean },
            { name: "tip_malaria_4dose", type: Boolean },
            { name: "diu_ppimediate", type: Boolean },
            { name: "ot_pp", type: Boolean },
            { name: "nadovivo", type: Boolean },
            { name: "nadomorto", type: Boolean },
            { name: "nadomorto_focoentrada", type: Boolean },
            { name: "nadomorto_macerado", type: Boolean },
            { name: "mot_skintoskin", type: Boolean },
            { name: "breastfeeding_1hr", type: Boolean },
            { name: "premature", type: Boolean },
            { name: "neonatalsepsis", type: Boolean },
            { name: "neonatalasphyxia", type: Boolean },
            { name: "malformation", type: Boolean },
            { name: "success_reanimation", type: Boolean },
            { name: "unsuccess_reanimation", type: Boolean },
            { name: "complicat_spec", type: Boolean },
            { name: "twin", type: Boolean },
            { name: "gender", type: String },
            { name: "weight", type: Number },
            { name: "weight_under2500gr", type: Boolean },
            { name: "newborn_arv", type: Boolean },
            { name: "nb_syphilistreat", type: String },
            { name: "mot_vitamin_a", type: String },
            { name: "mot_saltferrous", type: String },
            { name: "mot_home_arv", type: String },
            { name: "chd_home_arv", type: String },
            { name: "discharge_date", type: Date },
            { name: "transfer_out_us", type: String },
            { name: "hospitaldays", type: Number },
            { name: "obs", type: String },
            { name: "providername", type: String }
        ]),

        mother: $defineEntity(mother, [
            { name: "id", type: Number, isReadOnly: true },
            { name: "nid_cpn", type: String },
            { name: "nid_tarv", type: String },
            { name: "name", type: String },
            { name: "residence", type: String },
            { name: "phone", type: String },
            { name: "dob", type: Date }
        ]),

        paciente_resistente_tb: $defineEntity(paciente_resistente_tb, [
            { name: "id", type: String, isReadOnly: true },
            { name: "distrito", type: String },
            { name: "us", type: String },
            { name: "dataregisto", type: Date },
            { name: "NIT2", type: String },
            { name: "nome", type: String },
            { name: "sexo", type: String },
            { name: "grupoetario", type: Boolean },
            { name: "endereco", type: String },
            { name: "telefone", type: String },
            { name: "ocupacao", type: String },
            { name: "NIT", type: String },
            { name: "dataregistotb", type: Date },
            { name: "localizacaolesao", type: String },
            { name: "categoriadoete", type: String },
            { name: "ttoprevio2l", type: String },
            { name: "diagconfirmadopor", type: Boolean },
            { name: "datacolheitatsa", type: Date },
            { name: "dataresultadotsa", type: Date },
            { name: "sensibilidade_s", type: Boolean },
            { name: "sensibilidade_h", type: Boolean },
            { name: "sensibilidade_r", type: Boolean },
            { name: "sensibilidade_e", type: Boolean },
            { name: "sensibilidade_z", type: Boolean },
            { name: "sensibilidade_Amk_Km", type: Boolean },
            { name: "sensibilidade_cm", type: Boolean },
            { name: "sensibilidade_FQ", type: Boolean },
            { name: "sensibilidade_Pto_Eto", type: Boolean },
            { name: "sensibilidade_Outro1", type: String },
            { name: "sensibilidade_Outro2", type: String },
            { name: "sensibilidade_Outro3", type: String },
            { name: "perfilresistencia", type: String },
            { name: "contactosrastreadostbr", type: Number },
            { name: "contactoscomtbr", type: Number },
            { name: "tastehiv", type: String },
            { name: "dataresultadohiv", type: Date },
            { name: "tpc", type: String },
            { name: "datainiciotpc", type: Date },
            { name: "emtarv", type: String },
            { name: "NID", type: String },
            { name: "datainiciotarv", type: Date },
            { name: "regimetratamento", type: String },
            { name: "ustratamento", type: String },
            { name: "usdatainiciotto", type: Date },
            { name: "comtratamento", type: String },
            { name: "comdatainiciotto", type: Date },
            { name: "resultadobk_0m", type: String },
            { name: "dataresultadobk_0m", type: Date },
            { name: "resultadocultura_0m", type: String },
            { name: "dataresultadocultura_0m", type: Date },
            { name: "resultadobk_1m", type: String },
            { name: "resultadocultura_1m", type: String },
            { name: "dataresultado_1m", type: Date },
            { name: "resultadobk_2m", type: String },
            { name: "resultadocultura_2m", type: String },
            { name: "dataresultado_2m", type: Date },
            { name: "resultadobk_3m", type: String },
            { name: "resultadocultura_3m", type: String },
            { name: "dataresultado_3m", type: Date },
            { name: "resultadobk_4m", type: String },
            { name: "resultadocultura_4m", type: String },
            { name: "dataresultado_4m", type: Date },
            { name: "resultadobk_5m", type: String },
            { name: "resultadocultura_5m", type: String },
            { name: "dataresultado_5m", type: Date },
            { name: "resultadobk_6m", type: String },
            { name: "resultadocultura_6m", type: String },
            { name: "dataresultado_6m", type: Date },
            { name: "estadopaciente6meses", type: String },
            { name: "resultadobk_7m", type: String },
            { name: "resultadocultura_7m", type: String },
            { name: "dataresultado_7m", type: Date },
            { name: "resultadobk_8m", type: String },
            { name: "resultadocultura_8m", type: String },
            { name: "dataresultado_8m", type: Date },
            { name: "resultadobk_9m", type: String },
            { name: "resultadocultura_9m", type: String },
            { name: "dataresultado_9m", type: Date },
            { name: "resultadobk_10m", type: String },
            { name: "resultadocultura_10m", type: String },
            { name: "dataresultado_10m", type: Date },
            { name: "resultadobk_11m", type: String },
            { name: "resultadocultura_11m", type: String },
            { name: "dataresultado_11m", type: Date },
            { name: "resultadobk_12m", type: String },
            { name: "resultadocultura_12m", type: String },
            { name: "dataresultado_12m", type: Date },
            { name: "estadopaciente12meses", type: String },
            { name: "resultadobk_14m", type: String },
            { name: "resultadocultura_14m", type: String },
            { name: "dataresultado_14m", type: Date },
            { name: "resultadobk_16m", type: String },
            { name: "resultadocultura_16m", type: String },
            { name: "dataresultado_16m", type: Date },
            { name: "resultadobk_18m", type: String },
            { name: "resultadocultura_18m", type: String },
            { name: "dataresultado_18m", type: Date },
            { name: "estadopaciente18meses", type: String },
            { name: "resultadobk_20m", type: String },
            { name: "resultadocultura_20m", type: String },
            { name: "dataresultado_20m", type: Date },
            { name: "resultadobk_22m", type: String },
            { name: "resultadocultura_22m", type: String },
            { name: "dataresultado_22m", type: Date },
            { name: "resultadobk_24m", type: String },
            { name: "resultadocultura_24m", type: String },
            { name: "dataresultado_24m", type: Date },
            { name: "estadopaciente24meses", type: String },
            { name: "resultadobk_26m", type: String },
            { name: "resultadocultura_26m", type: String },
            { name: "dataresultado_26m", type: Date },
            { name: "resultadobk_28m", type: String },
            { name: "resultadocultura_28m", type: String },
            { name: "dataresultado_28m", type: Date },
            { name: "resultadobk_30m", type: String },
            { name: "resultadocultura_30m", type: String },
            { name: "dataresultado_30m", type: Date },
            { name: "estadopaciente30meses", type: String },
            { name: "resultadofinaltto", type: String },
            { name: "datafimtto", type: Date },
            { name: "obs", type: String },
            { name: "nometecnico", type: String }
        ]),

        pacientetb: $defineEntity(pacientetb, [
            { name: "id", type: String, isReadOnly: true },
            { name: "ano", type: Number },
            { name: "dataregisto", type: Date },
            { name: "NIT", type: String },
            { name: "nome", type: String },
            { name: "sexo", type: String },
            { name: "grupoetario", type: Boolean },
            { name: "residencia", type: String },
            { name: "telefone", type: String },
            { name: "ocupacao", type: String },
            { name: "proveniencia", type: String },
            { name: "localizacaolesao", type: String },
            { name: "categoriadoente", type: String },
            { name: "datainiciotto", type: Date },
            { name: "casonovoadulto", type: String },
            { name: "casonovocrianca", type: String },
            { name: "retratamento", type: String },
            { name: "tbresistente", type: Boolean },
            { name: "nit_tbresistente", type: String },
            { name: "fintensivalocal", type: String },
            { name: "fintensivanomelocal", type: String },
            { name: "fmanutencaolocal", type: String },
            { name: "fmanutencaonomelocal", type: String },
            { name: "testado", type: String },
            { name: "hivresultado", type: String },
            { name: "tpc", type: String },
            { name: "emtarv", type: String },
            { name: "NID", type: String },
            { name: "datainiciotarv", type: Date },
            { name: "contactosrastreados", type: Number },
            { name: "contactoscomtb", type: Number },
            { name: "criancasrastreadas", type: Number },
            { name: "criancasquimioproflaxia", type: Number },
            { name: "bkdata", type: Date },
            { name: "bkresultado", type: String },
            { name: "bknumlab", type: String },
            { name: "gxrifdata", type: Date },
            { name: "gxresultado", type: String },
            { name: "rifresultado", type: String },
            { name: "gxrifnumlab", type: String },
            { name: "culturadata", type: Date },
            { name: "culturaresultado", type: String },
            { name: "culturanumlab", type: String },
            { name: "rx", type: String },
            { name: "outrosexames", type: String },
            { name: "bact_bkdata_2_3", type: Date },
            { name: "bact_bkresultado_2_3", type: String },
            { name: "bact_bknumlab_2_3", type: String },
            { name: "bact_culturadata_2_3", type: Date },
            { name: "bact_culturaresultado_2_3", type: String },
            { name: "bact_culturanumlab_2_3", type: String },
            { name: "bact_bkdata_5", type: Date },
            { name: "bact_bkresultado_5", type: String },
            { name: "bact_bknumlab_5", type: String },
            { name: "bact_culturadata_5", type: Date },
            { name: "bact_culturaresultado_5", type: String },
            { name: "bact_culturanumlab_5", type: String },
            { name: "bact_bkdata_fimtrat", type: Date },
            { name: "bact_bkresultado_fimtrat", type: String },
            { name: "bact_bknumlab_fimtrat", type: String },
            { name: "bact_culturadata_fimtrat", type: Date },
            { name: "bact_culturaresultado_fimtrat", type: String },
            { name: "bact_culturanumlab_fimtrat", type: String },
            { name: "datafimtratamento", type: Date },
            { name: "resultadotratamento", type: String },
            { name: "tb_resistente", type: Number },
            { name: "obs", type: String }
        ]),

        patient: $defineEntity(patient, [
            { name: "id", type: Number, isReadOnly: true },
            { name: "person_type", type: String },
            { name: "nid_cpn", type: String },
            { name: "nid_ccr", type: String },
            { name: "nit", type: String },
            { name: "nficha_gbv", type: String },
            { name: "nid_tarv", type: String },
            { name: "name", type: String },
            { name: "residence", type: String },
            { name: "phone", type: String },
            { name: "dob", type: Date }
        ]),

        t_categoria: $defineEntity(t_categoria, [
            { name: "codcategoria", type: Number, isReadOnly: true },
            { name: "categoria", type: String }
        ]),

        t_grauexposicao: $defineEntity(t_grauexposicao, [
            { name: "codigo", type: Number, isReadOnly: true },
            { name: "grauexposicao", type: String }
        ]),

        t_historia_clinica_notificacao: $defineEntity(t_historia_clinica_notificacao, [
            { name: "ordem", type: Number, isReadOnly: true },
            { name: "notificacao", type: String },
            { name: "id", type: Number },
            { name: "historicoclinico", type: String },
            { name: "valor", type: Boolean }
        ]),

        t_historiaclinica: $defineEntity(t_historiaclinica, [
            { name: "id", type: Number, isReadOnly: true },
            { name: "historicoclinico", type: String },
            { name: "tabela", type: String }
        ]),

        t_intervenco: $defineEntity(t_intervenco, [
            { name: "codintervencoes", type: Number, isReadOnly: true },
            { name: "intervencoes", type: String }
        ]),

        t_laboratorio_notificacao: $defineEntity(t_laboratorio_notificacao, [
            { name: "ordem", type: Number, isReadOnly: true },
            { name: "notificacao", type: String },
            { name: "id", type: Number },
            { name: "analise", type: String },
            { name: "valor", type: String }
        ]),

        t_localacidente: $defineEntity(t_localacidente, [
            { name: "codigo", type: Number, isReadOnly: true },
            { name: "descricao", type: String }
        ]),

        t_notificacao: $defineEntity(t_notificacao, [
            { name: "notificacao", type: String },
            { name: "data", type: Date },
            { name: "hora", type: Object },
            { name: "us", type: String },
            { name: "referido_de", type: Number },
            { name: "tipo_violencia", type: Number },
            { name: "nome", type: String },
            { name: "endereco", type: String },
            { name: "telefone", type: String },
            { name: "datanasc", type: Date },
            { name: "idade", type: Number },
            { name: "Sexo", type: String },
            { name: "gravidez", type: String },
            { name: "data_mestruacao", type: Date },
            { name: "data_violencia", type: Date },
            { name: "hora_violencia", type: Object },
            { name: "circunstancia", type: String },
            { name: "agressores", type: Number },
            { name: "relacao", type: String },
            { name: "condicao_exposta", type: Number },
            { name: "condicao_fonte", type: Number },
            { name: "comentario", type: String },
            { name: "Referencia", type: Number },
            { name: "data_inicial", type: Date },
            { name: "clinico", type: String },
            { name: "seguimentos", type: String },
            { name: "especifique", type: String }
        ]),

        t_referencia: $defineEntity(t_referencia, [
            { name: "codreferencias", type: Number, isReadOnly: true },
            { name: "referencias", type: String }
        ]),

        t_referido: $defineEntity(t_referido, [
            { name: "codreferido", type: Number, isReadOnly: true },
            { name: "referido", type: String }
        ]),

        t_regimeppe: $defineEntity(t_regimeppe, [
            { name: "codigo", type: Number, isReadOnly: true },
            { name: "regime", type: String }
        ]),

        t_registodiarioppe: $defineEntity(t_registodiarioppe, [
            { name: "id", type: Number, isReadOnly: true },
            { name: "us", type: String },
            { name: "nid", type: String },
            { name: "data", type: Date },
            { name: "resultadohivExposta", type: Number },
            { name: "resultadohivfonte", type: Number },
            { name: "grauexposicao", type: Number },
            { name: "regimeppeprescrito", type: Number },
            { name: "categoria", type: Number },
            { name: "localacidente", type: Number },
            { name: "resultadoppe", type: Number },
            { name: "coduser", type: Number },
            { name: "dataregisto", type: Date }
        ]),

        t_registodiariovgb: $defineEntity(t_registodiariovgb, [
            { name: "Id", type: Number, isReadOnly: true },
            { name: "us", type: String },
            { name: "Nid", type: String },
            { name: "Data", type: Date },
            { name: "Referidode", type: Number },
            { name: "ResultadoHIVExposta", type: Number },
            { name: "tipoviolencia", type: Number },
            { name: "intervencao", type: Number },
            { name: "referencia", type: Number },
            { name: "resultadoppe", type: Number },
            { name: "coduser", type: Number },
            { name: "datareg", type: Date }
        ]),

        t_resultadosppe: $defineEntity(t_resultadosppe, [
            { name: "codresultado", type: Number, isReadOnly: true },
            { name: "resultado", type: String }
        ]),

        t_resultadoteste: $defineEntity(t_resultadoteste, [
            { name: "codigo", type: Number, isReadOnly: true },
            { name: "resultadoteste", type: String }
        ]),

        t_seguimento_notificacao: $defineEntity(t_seguimento_notificacao, [
            { name: "ordem", type: Number, isReadOnly: true },
            { name: "notificacao", type: String },
            { name: "id", type: Number },
            { name: "descricao", type: String },
            { name: "inicial", type: Date },
            { name: "C2sem", type: Date },
            { name: "C4sem", type: Date },
            { name: "C6sem", type: Date },
            { name: "C3mes", type: Date },
            { name: "C6mes", type: Date }
        ]),

        t_tipoviolencia: $defineEntity(t_tipoviolencia, [
            { name: "codigo", type: Number, isReadOnly: true },
            { name: "tipoviolencia", type: String }
        ]),

        t_usItem: $defineEntity(t_usItem, [
            { name: "id", type: Number, isReadOnly: true },
            { name: "codigo", type: String },
            { name: "designacao", type: String },
            { name: "distrito", type: String },
            { name: "localidade", type: String },
            { name: "activo", type: Boolean },
            { name: "provincia", type: String }
        ]),

        t_user: $defineEntity(t_user, [
            { name: "coduser", type: Number, isReadOnly: true },
            { name: "nome", type: String },
            { name: "login", type: String },
            { name: "senha", type: String },
            { name: "datareg", type: Date },
            { name: "data", type: Date }
        ]),

        usuario: $defineEntity(usuario, [
            { name: "id", type: String, isReadOnly: true },
            { name: "username", type: String },
            { name: "name", type: String },
            { name: "apelido", type: String },
            { name: "password", type: String },
            { name: "posicao", type: String },
            { name: "systemrole", type: String }
        ]),

        ApplicationData: $defineDataService(ApplicationData, lightSwitchApplication.rootUri + "/ApplicationData.svc", [
        ], [
        ]),

        dbmanualsourceData: $defineDataService(dbmanualsourceData, lightSwitchApplication.rootUri + "/dbmanualsourceData.svc", [
            { name: "amostrastbs", elementType: amostrastb },
            { name: "ccrs", elementType: ccr },
            { name: "ccrsegs", elementType: ccrseg },
            { name: "children", elementType: child },
            { name: "cpn_finals", elementType: cpn_final },
            { name: "cpn_olds", elementType: cpn_old },
            { name: "cpns", elementType: cpn },
            { name: "cpps", elementType: cpp },
            { name: "csr_pfs", elementType: csr_pf },
            { name: "laboratoriotbs", elementType: laboratoriotb },
            { name: "livroes", elementType: livro },
            { name: "maternidades", elementType: maternidade },
            { name: "mothers", elementType: mother },
            { name: "paciente_resistente_tbs", elementType: paciente_resistente_tb },
            { name: "pacientetbs", elementType: pacientetb },
            { name: "patients", elementType: patient },
            { name: "t_categorias", elementType: t_categoria },
            { name: "t_grauexposicaos", elementType: t_grauexposicao },
            { name: "t_historia_clinica_notificacaos", elementType: t_historia_clinica_notificacao },
            { name: "t_historiaclinicas", elementType: t_historiaclinica },
            { name: "t_intervencoes", elementType: t_intervenco },
            { name: "t_laboratorio_notificacaos", elementType: t_laboratorio_notificacao },
            { name: "t_localacidentes", elementType: t_localacidente },
            { name: "t_notificacaos", elementType: t_notificacao },
            { name: "t_referencias", elementType: t_referencia },
            { name: "t_referidoes", elementType: t_referido },
            { name: "t_regimeppes", elementType: t_regimeppe },
            { name: "t_registodiarioppes", elementType: t_registodiarioppe },
            { name: "t_registodiariovgbs", elementType: t_registodiariovgb },
            { name: "t_resultadosppes", elementType: t_resultadosppe },
            { name: "t_resultadotestes", elementType: t_resultadoteste },
            { name: "t_seguimento_notificacaos", elementType: t_seguimento_notificacao },
            { name: "t_tipoviolencias", elementType: t_tipoviolencia },
            { name: "t_us", elementType: t_usItem },
            { name: "t_users", elementType: t_user },
            { name: "usuarios", elementType: usuario }
        ], [
            {
                name: "amostrastbs_SingleOrDefault", value: function (id) {
                    return new $DataServiceQuery({ _entitySet: this.amostrastbs },
                        lightSwitchApplication.rootUri + "/dbmanualsourceData.svc" + "/amostrastbs(" + "id=" + $toODataString(id, "Int64?") + ")"
                    );
                }
            },
            {
                name: "ccrs_SingleOrDefault", value: function (id) {
                    return new $DataServiceQuery({ _entitySet: this.ccrs },
                        lightSwitchApplication.rootUri + "/dbmanualsourceData.svc" + "/ccrs(" + "id=" + $toODataString(id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "ccrsegs_SingleOrDefault", value: function (id) {
                    return new $DataServiceQuery({ _entitySet: this.ccrsegs },
                        lightSwitchApplication.rootUri + "/dbmanualsourceData.svc" + "/ccrsegs(" + "id=" + $toODataString(id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "children_SingleOrDefault", value: function (id) {
                    return new $DataServiceQuery({ _entitySet: this.children },
                        lightSwitchApplication.rootUri + "/dbmanualsourceData.svc" + "/children(" + "id=" + $toODataString(id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "cpn_finals_SingleOrDefault", value: function (id) {
                    return new $DataServiceQuery({ _entitySet: this.cpn_finals },
                        lightSwitchApplication.rootUri + "/dbmanualsourceData.svc" + "/cpn_finals(" + "id=" + $toODataString(id, "Int64?") + ")"
                    );
                }
            },
            {
                name: "cpn_olds_SingleOrDefault", value: function (id) {
                    return new $DataServiceQuery({ _entitySet: this.cpn_olds },
                        lightSwitchApplication.rootUri + "/dbmanualsourceData.svc" + "/cpn_olds(" + "id=" + $toODataString(id, "Int64?") + ")"
                    );
                }
            },
            {
                name: "cpns_SingleOrDefault", value: function (id) {
                    return new $DataServiceQuery({ _entitySet: this.cpns },
                        lightSwitchApplication.rootUri + "/dbmanualsourceData.svc" + "/cpns(" + "id=" + $toODataString(id, "Int64?") + ")"
                    );
                }
            },
            {
                name: "cpps_SingleOrDefault", value: function (id) {
                    return new $DataServiceQuery({ _entitySet: this.cpps },
                        lightSwitchApplication.rootUri + "/dbmanualsourceData.svc" + "/cpps(" + "id=" + $toODataString(id, "Int64?") + ")"
                    );
                }
            },
            {
                name: "csr_pfs_SingleOrDefault", value: function (id) {
                    return new $DataServiceQuery({ _entitySet: this.csr_pfs },
                        lightSwitchApplication.rootUri + "/dbmanualsourceData.svc" + "/csr_pfs(" + "id=" + $toODataString(id, "Int64?") + ")"
                    );
                }
            },
            {
                name: "laboratoriotbs_SingleOrDefault", value: function (id) {
                    return new $DataServiceQuery({ _entitySet: this.laboratoriotbs },
                        lightSwitchApplication.rootUri + "/dbmanualsourceData.svc" + "/laboratoriotbs(" + "id=" + $toODataString(id, "Int64?") + ")"
                    );
                }
            },
            {
                name: "livroes_SingleOrDefault", value: function (ID) {
                    return new $DataServiceQuery({ _entitySet: this.livroes },
                        lightSwitchApplication.rootUri + "/dbmanualsourceData.svc" + "/livroes(" + "ID=" + $toODataString(ID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "maternidades_SingleOrDefault", value: function (id) {
                    return new $DataServiceQuery({ _entitySet: this.maternidades },
                        lightSwitchApplication.rootUri + "/dbmanualsourceData.svc" + "/maternidades(" + "id=" + $toODataString(id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "mothers_SingleOrDefault", value: function (id) {
                    return new $DataServiceQuery({ _entitySet: this.mothers },
                        lightSwitchApplication.rootUri + "/dbmanualsourceData.svc" + "/mothers(" + "id=" + $toODataString(id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "paciente_resistente_tbs_SingleOrDefault", value: function (id) {
                    return new $DataServiceQuery({ _entitySet: this.paciente_resistente_tbs },
                        lightSwitchApplication.rootUri + "/dbmanualsourceData.svc" + "/paciente_resistente_tbs(" + "id=" + $toODataString(id, "Int64?") + ")"
                    );
                }
            },
            {
                name: "pacientetbs_SingleOrDefault", value: function (id) {
                    return new $DataServiceQuery({ _entitySet: this.pacientetbs },
                        lightSwitchApplication.rootUri + "/dbmanualsourceData.svc" + "/pacientetbs(" + "id=" + $toODataString(id, "Int64?") + ")"
                    );
                }
            },
            {
                name: "patients_SingleOrDefault", value: function (id) {
                    return new $DataServiceQuery({ _entitySet: this.patients },
                        lightSwitchApplication.rootUri + "/dbmanualsourceData.svc" + "/patients(" + "id=" + $toODataString(id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "t_categorias_SingleOrDefault", value: function (codcategoria) {
                    return new $DataServiceQuery({ _entitySet: this.t_categorias },
                        lightSwitchApplication.rootUri + "/dbmanualsourceData.svc" + "/t_categorias(" + "codcategoria=" + $toODataString(codcategoria, "Int32?") + ")"
                    );
                }
            },
            {
                name: "t_grauexposicaos_SingleOrDefault", value: function (codigo) {
                    return new $DataServiceQuery({ _entitySet: this.t_grauexposicaos },
                        lightSwitchApplication.rootUri + "/dbmanualsourceData.svc" + "/t_grauexposicaos(" + "codigo=" + $toODataString(codigo, "Int32?") + ")"
                    );
                }
            },
            {
                name: "t_historia_clinica_notificacaos_SingleOrDefault", value: function (ordem) {
                    return new $DataServiceQuery({ _entitySet: this.t_historia_clinica_notificacaos },
                        lightSwitchApplication.rootUri + "/dbmanualsourceData.svc" + "/t_historia_clinica_notificacaos(" + "ordem=" + $toODataString(ordem, "Int32?") + ")"
                    );
                }
            },
            {
                name: "t_historiaclinicas_SingleOrDefault", value: function (id) {
                    return new $DataServiceQuery({ _entitySet: this.t_historiaclinicas },
                        lightSwitchApplication.rootUri + "/dbmanualsourceData.svc" + "/t_historiaclinicas(" + "id=" + $toODataString(id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "t_intervencoes_SingleOrDefault", value: function (codintervencoes) {
                    return new $DataServiceQuery({ _entitySet: this.t_intervencoes },
                        lightSwitchApplication.rootUri + "/dbmanualsourceData.svc" + "/t_intervencoes(" + "codintervencoes=" + $toODataString(codintervencoes, "Int32?") + ")"
                    );
                }
            },
            {
                name: "t_laboratorio_notificacaos_SingleOrDefault", value: function (ordem) {
                    return new $DataServiceQuery({ _entitySet: this.t_laboratorio_notificacaos },
                        lightSwitchApplication.rootUri + "/dbmanualsourceData.svc" + "/t_laboratorio_notificacaos(" + "ordem=" + $toODataString(ordem, "Int32?") + ")"
                    );
                }
            },
            {
                name: "t_localacidentes_SingleOrDefault", value: function (codigo) {
                    return new $DataServiceQuery({ _entitySet: this.t_localacidentes },
                        lightSwitchApplication.rootUri + "/dbmanualsourceData.svc" + "/t_localacidentes(" + "codigo=" + $toODataString(codigo, "Int32?") + ")"
                    );
                }
            },
            {
                name: "t_notificacaos_SingleOrDefault", value: function (notificacao) {
                    return new $DataServiceQuery({ _entitySet: this.t_notificacaos },
                        lightSwitchApplication.rootUri + "/dbmanualsourceData.svc" + "/t_notificacaos(" + "notificacao=" + $toODataString(notificacao, "String?") + ")"
                    );
                }
            },
            {
                name: "t_referencias_SingleOrDefault", value: function (codreferencias) {
                    return new $DataServiceQuery({ _entitySet: this.t_referencias },
                        lightSwitchApplication.rootUri + "/dbmanualsourceData.svc" + "/t_referencias(" + "codreferencias=" + $toODataString(codreferencias, "Int32?") + ")"
                    );
                }
            },
            {
                name: "t_referidoes_SingleOrDefault", value: function (codreferido) {
                    return new $DataServiceQuery({ _entitySet: this.t_referidoes },
                        lightSwitchApplication.rootUri + "/dbmanualsourceData.svc" + "/t_referidoes(" + "codreferido=" + $toODataString(codreferido, "Int32?") + ")"
                    );
                }
            },
            {
                name: "t_regimeppes_SingleOrDefault", value: function (codigo) {
                    return new $DataServiceQuery({ _entitySet: this.t_regimeppes },
                        lightSwitchApplication.rootUri + "/dbmanualsourceData.svc" + "/t_regimeppes(" + "codigo=" + $toODataString(codigo, "Int32?") + ")"
                    );
                }
            },
            {
                name: "t_registodiarioppes_SingleOrDefault", value: function (id) {
                    return new $DataServiceQuery({ _entitySet: this.t_registodiarioppes },
                        lightSwitchApplication.rootUri + "/dbmanualsourceData.svc" + "/t_registodiarioppes(" + "id=" + $toODataString(id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "t_registodiariovgbs_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.t_registodiariovgbs },
                        lightSwitchApplication.rootUri + "/dbmanualsourceData.svc" + "/t_registodiariovgbs(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "t_resultadosppes_SingleOrDefault", value: function (codresultado) {
                    return new $DataServiceQuery({ _entitySet: this.t_resultadosppes },
                        lightSwitchApplication.rootUri + "/dbmanualsourceData.svc" + "/t_resultadosppes(" + "codresultado=" + $toODataString(codresultado, "Int32?") + ")"
                    );
                }
            },
            {
                name: "t_resultadotestes_SingleOrDefault", value: function (codigo) {
                    return new $DataServiceQuery({ _entitySet: this.t_resultadotestes },
                        lightSwitchApplication.rootUri + "/dbmanualsourceData.svc" + "/t_resultadotestes(" + "codigo=" + $toODataString(codigo, "Int32?") + ")"
                    );
                }
            },
            {
                name: "t_seguimento_notificacaos_SingleOrDefault", value: function (ordem) {
                    return new $DataServiceQuery({ _entitySet: this.t_seguimento_notificacaos },
                        lightSwitchApplication.rootUri + "/dbmanualsourceData.svc" + "/t_seguimento_notificacaos(" + "ordem=" + $toODataString(ordem, "Int32?") + ")"
                    );
                }
            },
            {
                name: "t_tipoviolencias_SingleOrDefault", value: function (codigo) {
                    return new $DataServiceQuery({ _entitySet: this.t_tipoviolencias },
                        lightSwitchApplication.rootUri + "/dbmanualsourceData.svc" + "/t_tipoviolencias(" + "codigo=" + $toODataString(codigo, "Int32?") + ")"
                    );
                }
            },
            {
                name: "t_us_SingleOrDefault", value: function (id) {
                    return new $DataServiceQuery({ _entitySet: this.t_us },
                        lightSwitchApplication.rootUri + "/dbmanualsourceData.svc" + "/t_us(" + "id=" + $toODataString(id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "t_users_SingleOrDefault", value: function (coduser) {
                    return new $DataServiceQuery({ _entitySet: this.t_users },
                        lightSwitchApplication.rootUri + "/dbmanualsourceData.svc" + "/t_users(" + "coduser=" + $toODataString(coduser, "Int32?") + ")"
                    );
                }
            },
            {
                name: "usuarios_SingleOrDefault", value: function (id) {
                    return new $DataServiceQuery({ _entitySet: this.usuarios },
                        lightSwitchApplication.rootUri + "/dbmanualsourceData.svc" + "/usuarios(" + "id=" + $toODataString(id, "Int64?") + ")"
                    );
                }
            }
        ]),

        DataWorkspace: $defineDataWorkspace(DataWorkspace, [
            { name: "ApplicationData", type: ApplicationData },
            { name: "dbmanualsourceData", type: dbmanualsourceData }
        ])

    });

}(msls.application));
