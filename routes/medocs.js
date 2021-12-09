var express = require('express');
var router = express.Router();


// *********** Import des modèles ***********************
var ActivesIngredientsData =require('../models/principes')
var ActivesModel = ActivesIngredientsData.ActivesIngredientsModel

var DrugsData = require('../models/drugs')
var MyDrugsModel = DrugsData.DrugsModel
// ************* functions **********************************

let isExistOrCreateLower = (model, cle, value) => { // 
  return new Promise (async(resolve,reject)=>{

    var isExist = await model.findOne({
      [cle]: value.toLowerCase()
    })

    if (!isExist){
      var newModel = new model({
        [cle]: value.toLowerCase(),
      })
      isExist = await newModel.save();
      resolve(isExist)
    }else{
      resolve(isExist)
    }
  })
}
// ******************
  const nbreAleatoire = (min,max)=>{
    return Math.floor(Math.random() * (max+1 - min) + min);
  }

  const chainenNmbreAleatoire =(nbre)=>{
    var chaine = ""
    for (var i=0;i<nbre;i++){
     chaine += nbreAleatoire(0,9)
    }
    return chaine
  }

console.log(chainenNmbreAleatoire(16))


  
  const nbreReelAleatoire = (min,max)=>{
    return Math.random() * (max - min) + min;
  }
// ******************
  const lettresAleatoire =(nbre)=>{
    var chaine = ""
    for (var i=0;i<nbre;i++){
     chaine += String.fromCharCode(nbreAleatoire(97,122))
    }
    return chaine
  }

let isExistOrCreateUpper = (model, cle, value) => { 
  return new Promise (async(resolve,reject)=>{
    var isExist = await model.findOne({
      [cle]: value.toUpperCase()
    })

    if (!isExist){
      var newModel = new model({
        [cle]: value.toUpperCase(),
      })
      isExist = await newModel.save();
      resolve(isExist)
    }else{
      resolve(isExist)
    }
  })
}
/* ******************** seeder principe actif en BDD ******************** */

router.get('/seeder-pa',async function(req, res, next) {

  console.log("")
  console.log("**************************************")
  console.log("******* passé par seeder drugs *******")
  console.log("**************************************")
  console.log("")

  const principes = ["Paracetamol", "Cefpodoxime", "Lévothyroxine sodique","Lopéramide chlorhydrate","Phloroglucinol","Triméthylphloroglucinol","Frovatriptan","Atorvastatine", "Ibuprofène","Diclofénac sodique", "tramadol","Macrogol 4000","Helicidine","Amoxicilline", "Opium","Clopidogrel","Oméprazole","Buprénorphine","Desloratadine"]
  for (var i=0;i<principes.length;i++){
    isExistOrCreateLower(ActivesModel,"name",principes[i])
  }

  res.json({value:"coucou"});
});

/* ******************** seeder medicaments en BDD ******************** */
router.get('/seeder',async function(req, res, next) {

  console.log("")
  console.log("**************************************")
  console.log("******* passé par seeder drugs *******")
  console.log("**************************************")
  console.log("")

  const photos =["v1638817799/Helpills/Dolipraneorodoz_-_500_mg_comprim%C3%A9_orodispersible_wgxjbq.png","v1638817799/Helpills/Dolipraneorodoz_-_500_mg_comprim%C3%A9_orodispersible_2_tznbmx.png","v1638817799/Helpills/Dolipranetabs_-_500mg_comprim%C3%A9_pellicul%C3%A9_xatct6.jpg"
  ,"v1638817800/Helpills/fzd_fstyfk.jpg","v1638817800/Helpills/522_zwwpdw.png","v1638817799/Helpills/Dolipranetabs_-_1000mg_comprim%C3%A9_pellicul%C3%A9_k3vmoa.jpg"
  ,"v1638817800/Helpills/Dolipraneliquiz_-_poudre_300mg_tnplwq.jpg","v1638817800/Helpills/Doliprane_-_Poudre_150mg_dcpgzi.jpg","v1638817800/Helpills/azd_e4sbbr.jpg","v1638817800/Helpills/Doliprane_-_Comprim%C3%A9_effervescent_s%C3%A9cable_1000mg_gtgj6w.jpg"
  ,"v1638817800/Helpills/Doliprane_-_Comprim%C3%A9_1000mg_ixdole.jpg","v1638817801/Helpills/Doliprane_-_Comprim%C3%A9_effervescent_500mg_g7lbo1.jpg","v1638817801/Helpills/Doliprane_-_Poudre_200mg_bxzo2s.jpg"
  ,"v1638817801/Helpills/Dolipraneliquiz_-_poudre_200mg_c3tbeu.jpg","v1638817801/Helpills/Doliprane_-_Poudre_100mg_sjfn59.jpg","v1638817801/Helpills/Doliprane_-_G%C3%A9lule_1000mg_kn7bh0.jpg"
  ,"v1638817801/Helpills/Doliprane_-_Poudre_300mg_q0hfqy.jpg","v1638817802/Helpills/Doliprane_-_Poudre_500mg_kbbn52.jpg","v1638817802/Helpills/Doliprane_-_Suppositoire_150mg_ryu0qe.jpg","v1638817802/Helpills/Doliprane_-_Suppositoire_s%C3%A9cable_100mg_luanhx.jpg"
  ,"v1638817802/Helpills/Doliprane_-_Poudre_1000mg_iuxxkr.jpg","v1638817802/Helpills/Doliprane_-_Suppositoire_200mg_dfxc6f.jpg","v1638817802/Helpills/Doliprane_500mg_Vitamine_C_150mg_-_Comprim%C3%A9_effervescent_otvphk.jpg","v1638817802/Helpills/Doliprane_400mg_Cod%C3%A9ine_20mg_-_comprim%C3%A9_s%C3%A9cable_o7obuk.jpg"
  ,"v1638817803/Helpills/Doliprane-1000mg-suppositoire_d3i3lt.jpg","v1638817803/Helpills/Doliprane_-_Suppositoire_300mg_g2xwin.jpg","v1638817803/Helpills/Doliprane_Caps_-_G%C3%A9lule_1000mg_vhoz5d.jpg","v1638817803/Helpills/DOLIPRANE_CODEINE_400_mg20_mg_comprim%C3%A9_s%C3%A9cable_pey5ho.jpg","v1638817803/Helpills/Doliprane_-_Comprim%C3%A9_500mg_ty1uuq.jpg","v1638817803/Helpills/Doliprane_-_Sirop_2_4_-_100ml_vlbihc.jpg","v1638817804/Helpills/Doliprane_-_G%C3%A9lule_500mg_cwxqey.jpg","v1638817821/Helpills/Kardegic_-_30_Sachets_de_poudre_75mg_ubankx.jpg"
  ,"v1638817820/Helpills/Kardegic_-_30_Sachets_de_poudre_300mg_sfsr3w.jpg","v1638817821/Helpills/Kardegic_-_30_Sachets_de_poudre_160mg_arzwqf.jpg","v1638817831/Helpills/Levothyrox_-_30_comprim%C3%A9s_s%C3%A9cables_100%C2%B5g_mi1m0u.png","v1638817831/Helpills/Levothyrox_-_30_comprim%C3%A9s_s%C3%A9cables_75%C2%B5g_afgqpp.png","v1638817831/Helpills/Levothyrox_-_30_comprim%C3%A9s_s%C3%A9cables_112%C2%B5g_nnkrnj.png","v1638817832/Helpills/Levothyrox_-_30_comprim%C3%A9s_s%C3%A9cables_50%C2%B5g_peog9o.png","v1638817832/Helpills/Levothyrox_-_30_comprim%C3%A9s_s%C3%A9cables_150%C2%B5g_ivhzwh.png","v1638817832/Helpills/Levothyrox_-_30_comprim%C3%A9s_s%C3%A9cables_175%C2%B5g_cgl5c5.png","v1638817832/Helpills/Levothyrox_-_30_comprim%C3%A9s_s%C3%A9cables_200%C2%B5g_ysngvd.png","v1638817832/Helpills/Levothyrox_-_30_comprim%C3%A9s_s%C3%A9cables_25%C2%B5g_wtsgez.png","v1638817832/Helpills/Levothyrox_-_30_comprim%C3%A9s_s%C3%A9cables_125%C2%B5g_p8ptrv.png","v1638817833/Helpills/Levothyrox_-_90_comprim%C3%A9s_s%C3%A9cables_25%C2%B5g_txh2sp.png"
  ,"v1638817844/Helpills/Spasfon_Lyoc_-_5_Lyophilisats_oraux_160mg_mseeri.jpg","v1638817844/Helpills/Spafon_80mg_Trim%C3%A9thylphloroglucinol_80mg_-_30_Comprim%C3%A9s_enrob%C3%A9s_bj1ia7.jpg","v1638817844/Helpills/Spafon_40mg_Trim%C3%A9thylphloroglucinol_40%C2%B5g_-_6_ampoules_de_solution_injectable_oh0avr.jpg","v1638817845/Helpills/Spafon_80mg_Trim%C3%A9thylphloroglucinol_80mg_-_10_Suppositoires_cad6w2.jpg","v1638817845/Helpills/Spasfon_Lyoc-_10_Lyophilisats_oraux_80mg_ixpx4u.jpg","v1638817857/Helpills/pack_3d_aspirine_500_eff_eyxxbb.png"
  ,"v1638817858/Helpills/aspirine_vit_c_eff_ugdaog.png","v1638817858/Helpills/pack_3d_aspirine_1000_eff_riywew.png","v1638817872/Helpills/pack_3d_citrate_menthe_oinesr.png","v1638817873/Helpills/pack_3d_citrate_citron_hfdepw.png","v1638817885/Helpills/pack_3d_donormyl_eff_wdaaux.png"
  ,"v1638817887/Helpills/pack_3d_donormyl_pelli_atjixj.png","v1638817896/Helpills/Dafalgan_-_Comprim%C3%A9_500mg_vn6bxz.png","v1638817904/Helpills/Dafalgan_-_Comprim%C3%A9_effervescent_1000mg_drhsnr.png","v1638817910/Helpills/Dafalgan_-_Comprim%C3%A9_effervescent_s%C3%A9cable_500mg_xjrk8x.png","v1638817917/Helpills/Dafalgan_-_Comprim%C3%A9_pellicul%C3%A9_1000mg_utomhp.png"
  ,"v1638817925/Helpills/Dafalgan_-_G%C3%A9lule_500mg_hw6zyf.png","v1638817932/Helpills/Dafalgan_-_G%C3%A9lule_1000mg_gydcgl.png","v1638817938/Helpills/Dafalgan_-_Suppositoire_600mg_qc7kal.png","v1638817945/Helpills/Dafalgan_500mg_Cod%C3%A9ine_30g_-_Comprim%C3%A9_effervescent_s%C3%A9cable_rteze0.png"
  ,"v1638817952/Helpills/Dafalgan_500mg_Cod%C3%A9ine_30g_-_Comprim%C3%A9_pellicul%C3%A9_gbnpz2.png","v1638817964/Helpills/DafalganCaps_-_G%C3%A9lule_500mg_vtptmy.png","v1638817969/Helpills/DafalganCaps_-_G%C3%A9lule_1000mg_poo6jk.png","v1638817977/Helpills/DafalganTabs_-_Comprim%C3%A9_pellicul%C3%A9_1000mg_t9n9u2.png","v1638817989/Helpills/EfferalganMed_-_Comprim%C3%A9_500mg_comkbm.png","v1638817993/Helpills/EfferalganMed_-_Comprim%C3%A9_effervescent_1000mg_r3qfiw.png","v1638817999/Helpills/EfferalganMed_-_Comprim%C3%A9_effervescent_s%C3%A9cable_500mg_oh5zc0.png","v1638818005/Helpills/EfferalganMed_-_Comprim%C3%A9_orodispersible_250_mg_lp0sbl.png","v1638818010/Helpills/EfferalganMed_-_Poudre_effervescente_80mg_v5457o.png" ,"v1638818016/Helpills/EfferalganMed_-_Poudre_effervescente_150mg_jwgl4e.png"
  ,"v1638818022/Helpills/EfferalganMed_-_Poudre_effervescente_250mg_hew5lo.png","v1638818027/Helpills/EfferalganMed_-_Sirop_30mg_ml_-_150ml_kcudap.png","v1638818031/Helpills/EfferalganMed_-_Sirop_30mg_ml_-_90ml_pipette_xmszmj.png","v1638818044/Helpills/EfferalganMed_-_Suppositoire_150mg_yrbwuj.png","v1638818037/Helpills/EfferalganMed_-_Suppositoire_80mg_vzuvxw.png","v1638818049/Helpills/EfferalganMed_-_Suppositoire_300mg_u0frmu.png","v1638818060/Helpills/Efferalgan_-_Comprim%C3%A9_effervescent_1000mg_if0ogj.png","v1638818065/Helpills/Efferalgan_-_Comprim%C3%A9_orodispersible_500_mg_tsgqbo.png","v1638818076/Helpills/Efferalgan_-_Comprim%C3%A9_pellicul%C3%A9_1000mg_t4ei3v.png"
  ,"v1638818084/Helpills/Efferalgan_-_Granul%C3%A9s_en_sachet_250_mg_lp8k6g.png","v1638818093/Helpills/Efferalgan_-_Granul%C3%A9s_en_sachet_500_mg_fcndss.png","v1638818101/Helpills/Efferalgan_-_Granul%C3%A9s_en_sachet_1000_mg_mj0rdb.png","v1638818116/Helpills/Efferalgan_500mg_Vitamine_C_200mg_-_Comprim%C3%A9_effervescent_ofatwy.png","v1638818130/Helpills/FERVEX_ADULTES_FRAMBOISE_granul%C3%A9s_pour_solution_buvable_en_sachet_i51k2s.png"
  ,"v1638818130/Helpills/FERVEX_ADULTES_granul%C3%A9s_pour_solution_buvable_en_sachet_smyxcz.png","v1638818130/Helpills/FERVEXRHUME_comprim%C3%A9_pellicul%C3%A9_dsgewz.png","v1638818131/Helpills/FERVEX_ENFANTS_SANS_SUCRE_granul%C3%A9s_pour_solution_buvable_en_sachet_vjd65n.png","v1638818142/Helpills/pack_3d_elementaires_spray_ntb_jc4zmq.png"
  ,"v1638818132/Helpills/FERVEX_ADULTES_SANS_SUCRE_granul%C3%A9s_pour_solution_buvable_en_sachet_c8unpj.png"
  ,"v1638818142/Helpills/pack_3d_elementaires_mdg_aigus_pastilles_1_jwltbf.png","v1638818142/Helpills/pack_3d_elementaires_spray_ntb_0_nbzdok.png","v1638818142/Helpills/pack_3d_elementaires_tm_sirop_jw16pn.png","v1638818142/Helpills/pack_3d_elementaires_mdg_enfants_jmejzt.png","v1638818143/Helpills/hd-pack-3d-elementaires-mdg-pastilles_wspyfk.png","v1638818143/Helpills/pack_3d_elementaires_tm_sanssucre_sirop_eweddq.png"
  ,"v1638818151/Helpills/pack_3d_nifluril_700_suppo_laoebh.png","v1638818152/Helpills/pack_3d_nifluril_400_suppo_v65cjd.png","v1638818152/Helpills/pack_3d_nifluril_250_gelules_v9thia.png","v1638818166/Helpills/polysilane_sachet_c4wtw8.png","v1638818167/Helpills/polysilane_tube1_0_yseqcb.png","v1638818178/Helpills/pack_3d_upfen_wxch5b.png"
  ,"v1638818186/Helpills/pack_3d_vit.c_500_exotique_croq_hprdzf.png","v1638818186/Helpills/pack_3d_vit.c_500_orange_croq_bnkmkt.png","v1638818187/Helpills/pack_3d_vit.c_1000_eff_jm5q4e.png","v1638818206/Helpills/actifed-rhume-jour-et-nuit_zhfrw3.jpg","v1638818206/Helpills/FLUSTIMEX_poudre_pour_solution_buvable_en_sachet_vqfdue.jpg","v1638818206/Helpills/humexlib-etat-grippal-paracetamol-vitamine-c-pheniramine-500-mg-200-mg-25-mg-poudre-pour-solution-buvable-8-sachets_ywkvwn.jpg"
  ,"v1638818206/Helpills/actron_lrfalv.jpg","v1638818206/Helpills/RHUMAGRIP_comprim%C3%A9_osvy42.jpg","v1638818206/Helpills/HUMEX_RHUME_comprim%C3%A9_et_g%C3%A9lule_lcg9fs.jpg"
  ,"v1638818206/Helpills/HUMEXLIB_ETAT_GRIPPAL_PARACETAMOL_VITAMINE_C_PHENIRAMINE_500_mg_200_mg_25_mg_SANS_SUCRE_poudre_pour_solution_buvable_en_sachet_%C3%A9dulcor%C3%A9e_%C3%A0_l_aspartam_ole70k.jpg","v1638818206/Helpills/algicalm_dkfst7.jpg","v1638818207/Helpills/PARACETAMOL_ACCORD_500_mg_comprim%C3%A9_s%C3%A9cable_c6f2ip.jpg","v1638818207/Helpills/humexlib-etat-grip-buv-sach-8_uo7pgh.png","v1638818207/Helpills/PARACETAMOL_ALMUS_500_mg_comprim%C3%A9_x5zj5p.jpg"
  ,"v1638818207/Helpills/mc-neil-actifed-rhume_nwigct.jpg","v1638818207/Helpills/Dolko-500mg-cp_ivxsca.jpg","v1638818208/Helpills/PARACETAMOL_ALTER_1_g_comprim%C3%A9_vvzprt.jpg","v1638818208/Helpills/DOLIRHUMEPRO_PARACETAMOL_PSEUDOEPHEDRINE_ET_DOXYLAMINE_comprim%C3%A9_evx03w.jpg","v1638818208/Helpills/DOLIRHUME_PARACETAMOL_ET_PSEUDOEPHEDRINE_500_mg_30_mg_comprim%C3%A9_uanoal.jpg"
  ,"v1638818208/Helpills/4-mg-21548_101_1615567854_p4qcls.jpg","v1638818208/Helpills/PARACETAMOL_ARROW_500_mg_comprim%C3%A9_datsg4.jpg","v1638818208/Helpills/PARACETAMOL_ARROW_1_g_comprim%C3%A9_gzec9s.jpg","v1638818208/Helpills/PARACETAMOL_CRISTERS_500_mg_comprim%C3%A9_zzmkim.jpg","v1638818209/Helpills/PARACETAMOL_EG_1_g_comprim%C3%A9_sxklsn.jpg","v1638818209/Helpills/PARACETAMOL_MYLAN_500_mg_comprim%C3%A9_hg5p5p.jpg","v1638818209/Helpills/PARACETAMOL_MYLAN_CONSEIL_1000_mg_comprim%C3%A9_s%C3%A9cable_yeiebl.jpg","v1638818209/Helpills/HUMEXLIB_PARACETAMOL_CHLORPHENAMINE_500_mg4_mg_g%C3%A9lule_h8nurp.jpg"
  ,"v1638818209/Helpills/PARACETAMOL_SANDOZ_CONSEIL_500_mg_comprim%C3%A9_krvlni.jpg","v1638818209/Helpills/PARACETAMOL_SANDOZ_CONSEIL_1000_mg_comprim_gv1ehg.jpg","v1638818211/Helpills/PARACETAMOL_EG_500_mg_comprim%C3%A9_dynbzr.jpg","v1638818211/Helpills/PARACETAMOL_TEVA_500_mg_comprim%C3%A9_lxbr65.jpg","v1638818211/Helpills/PARACETAMOL_ZENTIVA_500_mg_comprim%C3%A9_qou6fd.jpg","v1638818211/Helpills/PARACETAMOL_TEVA_1_g_comprim%C3%A9_asjcdx.jpg","v1638818211/Helpills/PARACETAMOL_ZENTIVA_CONSEIL_500_mg_comprim%C3%A9_x47acy.jpg","v1638818211/Helpills/PARACETAMOL_ZENTIVA_1000_mg_comprim%C3%A9_brll8m.jpg","v1638818211/Helpills/paracetamol-krka-1000mg-8-comprimes_zksbuq.jpg","v1638818212/Helpills/PRONTALGINE_comprim%C3%A9_bmrdvr.jpg","v1638818212/Helpills/PARACETAMOL_ZYDUS_1_g_comprim%C3%A9_l4gfwy.png","v1638818214/Helpills/PARACETAMOL_TEVA_CONSEIL_500_mg_comprim%C3%A9_lebovo.png"]
 
  const principes = ["Paracetamol", "Cefpodoxime", "Lévothyroxine sodique","Lopéramide chlorhydrate","Phloroglucinol","Triméthylphloroglucinol","Frovatriptan","Atorvastatine", "Ibuprofène","Diclofénac sodique", "tramadol","Macrogol 4000","Helicidine","Amoxicilline", "Opium","Clopidogrel","Oméprazole","Buprénorphine","Desloratadine"]
  const formeTherapeutique = ["gelule","comprime","sirop","effeverscent","orodispersible","suppositoire","transfusion","vaccin"]
  const dosage = [1000,500,300,250,100,60,50,40,30]
  const unite = ["mg"]

  for(var i=1;i<=200;i++){
    var tabPrincipe=[]
    console.log("")
    console.log("")
    console.log("*************  Seeder N°" + i + " *************")
    console.log("")

    // création du nom du médicament (aléatoire)
      var name = "Drug_"+ lettresAleatoire(6) +"_"+ nbreAleatoire(1,100) + i

    // création de l'image du médicament
      var img = "https://res.cloudinary.com/dz0ooeuqq/image/upload/"+photos[nbreAleatoire(0,photos.length-1)]
      var ceNotRecommended = [""]

    // Création des contres-indications (aléatoire)
      if(nbreAleatoire(0,1)==1){
        switch (nbreAleatoire(1,7)) {
          case 1:
            ceNotRecommended = ["enceinte"]
          break;
          case 2:
            ceNotRecommended = ["allaitantes"]
          break;
          case 3:
            ceNotRecommended = ["allaitantes","enceinte"]
          break;
          case 4:
            ceNotRecommended = ["Allergies"]
          break;        
          case 5:
            ceNotRecommended = ["Allergies","enceinte"]
          break;
          case 6:
            ceNotRecommended = ["Allergies","allaitantes"]
          break;
          case 7:
            ceNotRecommended = ["Allergies","allaitantes","enceinte"]
          break;
          default:
            ceNotRecommended = [""]; 
      }
      }else{
        ceNotRecommended = [""]
      }

    // Création du niveau de prescription (aléatoire)
      var cettePrescription = nbreAleatoire(0,3)
    
    // Création des formes thérapeutiques (aléatoire)
      var cetteFT =[]
    
    // création du rating
      // nbre d'etoiles
        var stars=nbreReelAleatoire(0,5)
        var nbreVote = 0
        if (stars!==0){
          nbreVote=nbreAleatoire(1,11111)
        }
        
      
      for (var i2=1;i2<=nbreAleatoire(1,3);i2++){
        var ceMedicament =[]
        console.log("")
        console.log("*******  FT N°" + i2 + " ******")
        var form=formeTherapeutique[nbreAleatoire(0,formeTherapeutique.length-1)]
        console.log("forme Thera: ", form)

        var tabActive=[]
        for (var i3=1; i3<=nbreAleatoire(1,3);i3++){
          console.log("")
          console.log("**  Drug details N°" + i3 + " **")
          if (tabActive.length>0){
            var ok=false;
            while (!ok){
              var trouve = false
              var activeIngredient=principes[nbreAleatoire(0,principes.length-1)]
              for (var i4=0;i4<tabActive.length;i4++){
                if(tabActive[i4]==activeIngredient){
                  trouve=true
                }
                if (i4==tabActive.length-1 && !trouve){
                  tabActive.push(activeIngredient)
                  ok=true;
                }
              }
            }
          }else{
            var activeIngredient=principes[nbreAleatoire(0,principes.length-1)]
            tabActive.push(activeIngredient)
          }

          var isExist = await ActivesModel.findOne({
            name: activeIngredient.toLowerCase()
          })

          if(isExist){
            var dosages=dosage[nbreAleatoire(0,dosage.length-1)]
            var unit=unite[nbreAleatoire(0,unite.length-1)]
            ceMedicament.push({name:activeIngredient,activeIngredient:isExist._id,dosage:dosages,unit:unit})
            tabPrincipe.push(isExist._id)
          }
          
        }
        cetteFT.push({form:form, madeWith:ceMedicament})
        console.log("FT "+(i2-1)+ " :",cetteFT[(i2-1)])
      }       
     
     console.log("name: ",name)
     console.log("img: ",img)
     console.log("médicament non recommandé si: ",ceNotRecommended)
     console.log("prescription: ",cettePrescription)
     console.log("/////",cetteFT)

     var newDrug = new DrugsData.DrugsModel(
      {
        drugName:name.toLowerCase(),
        urlToImg:img,
        prescription:cettePrescription,
        notRecommended:ceNotRecommended,
        drugsDetail:cetteFT,
        rating:{stars:stars,nbreVote:nbreVote}
      })
      var saveNewDrug = await newDrug.save();
      console.log(saveNewDrug)
      console.log("tabPrincipe",tabPrincipe)

      for (var i5=0; i5<tabPrincipe.length;i5++){
        await ActivesModel.updateOne(
          { _id: tabPrincipe[i5]},
          { $push: {drugsId: saveNewDrug._id }}
         );
      }
  }
  
  res.json({value:"coucou"});
});

/* ******************** Ajout d'un principe Actif en BDD ******************** */

router.post('/add-principes',async function(req, res, next) {

  console.log("")
  console.log("***************************************")
  console.log("******* passé par add-principes *******")
  console.log("***************************************")
  console.log("")

    var tableauKeys=Object.keys(req.body)                     // conversion de l'objet en tableau comportant l'ensemble des clés
    for (var i=0;i<tableauKeys.length;i++){
      key = tableauKeys[i]
      const activeIngredient = await isExistOrCreateLower(ActivesModel,"name",req.body[key]);
      console.log(activeIngredient)
    }
  res.json({value:req.body});
});

/* ******************** Ajout d'un médicament en BDD  ******************** */

router.post('/add-drugs',async function(req, res, next) {

  console.log("")
  console.log("***************************************")
  console.log("******* passé par add-drugs *******")
  console.log("***************************************")
  console.log("")

  console.log(req.body)
  console.log("name:",req.body.name)
  console.log("Img:",req.body.urlToImg)
  console.log("prescription:",req.body.prescription)
  console.log("form:",req.body.form)
  console.log("activeIngredient:",req.body.activeIngredient)
  console.log("dosage:",req.body.dosage)
  console.log("notRecommended:",req.body.notRecommended)
  console.log("unit:",req.body.unit)
 
  
  // first step - Is the drug already exist on the database ?

  const drug = await DrugsData.DrugsModel.findOne({
    drugName:req.body.name.toLowerCase(),
  })

  if(!drug){
    const activeIngredient = await isExistOrCreateLower(ActivesModel,"name",req.body.activeIngredient);

    var newDrug = new DrugsData.DrugsModel(
    {
      drugName:req.body.name.toLowerCase(),
      urlToImg:req.body.urlToImg,
      prescription:req.body.prescription,
      notRecommended:req.body.notRecommended,
      drugsDetail:[
      {
        form:req.body.form,
        madeWith:[
        {
          activeIngredient:activeIngredient._id,
          dosage:req.body.dosage,
          unit:req.body.unit
        }]
      }]
    })

    var saveNewDrug = await newDrug.save();
    if (!saveNewDrug){
      saveNewDrug="NotOK"
    }else{
      // mettre à jour la collection "activesIngredients" : ajouter l'id du médicament.
      await ActivesModel.updateOne(
        { name: req.body.activeIngredient.toLowerCase()},
        { $push: {drugsId: saveNewDrug._id }}
      );
    }
  }
  res.json({saveNewDrug});;
});

// ******************************   lecture médicament en BDD  ******************** */

router.post('/getDrugsByActive',async function(req, res, next) {
  console.log("")
  console.log("******************************************")
  console.log("******* passé par getDrugsByActive *******")
  console.log("******************************************")
  console.log("")

  const drugs = await ActivesModel.findOne({
    name:req.body.name.toLowerCase(),
  })
  console.log("******************************* la requete :", req.body.name)
  var drugsJson=[]
  
  for (var i6=0;i6<drugs.drugsId.length;i6++){
    var value = await MyDrugsModel.findById(drugs.drugsId[i6])
    drugsJson.push(value)
  }
  console.log(drugsJson)
  res.json({saveNewDrug:drugsJson});;
});

module.exports = router;

/*





var express = require('express');
var router = express.Router();
var fs = require('fs');
var request = require('sync-request');


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var cloudinary = require('cloudinary').v2;
cloudinary.config({ 
  cloud_name: 'dz0ooeuqq', 
  api_key: '438952442629597', 
  api_secret: 'd0XE2gzmzI3X3Vt_IsGm27_PGqc' 
});

var uniqid = require('uniqid');

router.post('/upload',async function(req, res, next) {
  console.log("passé par ici")
  pictureName='./tmp/'+uniqid()+'.jpg'
  var resultCopy = await req.files.avatar.mv(pictureName);
  if(!resultCopy) {
    var resultCloudinary = await cloudinary.uploader.upload(pictureName);

    var options = {
      json: {
        apiKey: "5c0a5d392c1745d2ae84dc0b1483bfd2",
        image: resultCloudinary.url,
      },
     };
    var resultDetectionRaw = await request('POST', 'https://lacapsule-faceapi.herokuapp.com/api/detect', options);
    var resultDetection = await resultDetectionRaw.body;
    resultDetection = await JSON.parse(resultDetection);
    console.log("*******************************************************************",resultDetection)
    res.json(resultCloudinary,resultDetection);      
 }else {
    res.json({error: resultCopy});
 }


  fs.unlinkSync(pictureName);
});



module.exports = router;

  


*/