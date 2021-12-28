var app = require("../app")
var request = require("supertest")

test("route searchdoc", async () => {
await request(app).get("/searchdoc")
  .send({ "docteur" : true })
  .expect(200)
  .expect({"docteur":[{"_id":"61ba5d3ee690d34bf22f96ab","email":"Drstrange@gmail.com","nom":"Strange","documents":[""],"prenom":"Stephen","photo":[""],"password":"$2b$10$ycUJIE9WePjL2x58vVQAbevjcdDRftIz7KgwNc8mDZ8J73nqyG3s6","adress":"177a bleecker street","telephone":"","status":4,"nSecu":"","mutuel":"","DispoDate":[],"copyDispoDate":[],"plaqueImmat":"","antecedent":[""],"__v":0},{"_id":"61ba5e29e690d34bf22f96b1","email":"Drstrangelove@gmail.com","nom":"Strangelove","documents":[""],"prenom":"eric","photo":[""],"password":"$2b$10$6VlVsoSkJsQwveTGgvCt/Oti1iw1V/sbAVNEDEbiZbI654Mx.vcPC","adress":"10 place de l eglise","telephone":"","status":4,"nSecu":"","mutuel":"","DispoDate":[],"copyDispoDate":[],"plaqueImmat":"","antecedent":[""],"__v":0},{"_id":"61ba5ec4e690d34bf22f96b7","email":"Sg1@gmail.com","nom":"Jackson","documents":[""],"prenom":"Daniel","photo":[""],"password":"$2b$10$yJ4REEsqsMkVJRmZcNILrOzpssUMFcFc2qRL4.4MaWJWzRJebIBUa","adress":"10 rue de la porte","telephone":"","status":4,"nSecu":"","mutuel":"","DispoDate":[],"copyDispoDate":[],"plaqueImmat":"","antecedent":[""],"__v":0},{"_id":"61c5811dc8027a4fcef9f850","email":"Test","nom":"Test","documents":[""],"prenom":"Test","photo":[""],"password":"$2b$10$isWB6Birdo58qNeMYKXLOeeIV.otY6fDhDBN/fpTFd2yzvOBy2Qz6","adress":"Test","telephone":"","status":4,"nSecu":"","mutuel":"","DispoDate":[],"copyDispoDate":[],"plaqueImmat":"","antecedent":[""],"__v":0},{"_id":"61c58260c8027a4fcef9f861","email":"Test2","nom":"Test2","documents":[""],"prenom":"Test2","photo":[""],"password":"$2b$10$QFduuIV1tjPJdO9djXvNQe0NSAnTrhUegD0lxAJzZ02tWTcKMSRS.","adress":"Test2","telephone":"","status":4,"nSecu":"","mutuel":"","DispoDate":[],"copyDispoDate":[],"plaqueImmat":"","antecedent":[""],"__v":0},{"_id":"61c58498c8027a4fcef9f86b","email":"Test3","nom":"Test3","documents":[""],"prenom":"Test3","photo":[""],"password":"$2b$10$yyrFY.3H0Pi3.WW/wIxW/OJNxNcKXb0IY12odoqLhjm4.enqcs2ua","adress":"Test3","telephone":"","status":4,"nSecu":"","mutuel":"","DispoDate":[],"copyDispoDate":[],"plaqueImmat":"","antecedent":[""],"__v":0},{"_id":"61c586133c643f152e3214d7","email":"Test5","nom":"Test5","documents":[""],"prenom":"Test5","photo":[""],"password":"$2b$10$Vr4BuMPzY67BOfUzaOn0wuBZ5sR5D1l1Wqp9WfNblqabSAwiIG4I.","adress":"Test5","telephone":"","status":4,"nSecu":"","mutuel":"","DispoDate":[],"copyDispoDate":[],"plaqueImmat":"","antecedent":[""],"__v":0},{"_id":"61c5870abf0bd3d98145131e","email":"Test10","nom":"Test10","documents":[""],"prenom":"Test10","photo":[""],"password":"$2b$10$HKdVFKBJfg10dNQVaKOWyOZEn6zMF.X5/TNpuqJV4rV0MZ2PCY6iK","adress":"Test10","telephone":"","status":4,"nSecu":"","mutuel":"","DispoDate":[],"copyDispoDate":[],"plaqueImmat":"","antecedent":[""],"__v":0},{"_id":"61c587675e67c4b5a399100a","email":"Test11","nom":"Test11","documents":[""],"prenom":"Test11","photo":[""],"password":"$2b$10$Grua29MyKu6QXk86ziekM.Yo2BMR280DPelTL7pgPdBT2Ht7.AZZC","adress":"Test11","telephone":"","status":4,"nSecu":"","mutuel":"","DispoDate":[],"copyDispoDate":[],"plaqueImmat":"","antecedent":[""],"__v":0},{"_id":"61c587af5e67c4b5a3991010","email":"Test20","nom":"Test20","documents":[""],"prenom":"Test20","photo":[""],"password":"$2b$10$0pwtDXamkc1vl7z3.xL3z.4OSUMi0FoSwxZ497.h/Qqv4MasNNtdO","adress":"Test20","telephone":"","status":4,"nSecu":"","mutuel":"","DispoDate":[],"copyDispoDate":[],"plaqueImmat":"","antecedent":[""],"__v":0},{"_id":"61c588835e67c4b5a3991016","email":"Test21","nom":"Test21","documents":[""],"prenom":"Test21","photo":[""],"password":"$2b$10$qzz4XhqyFGBX4y4EvWsY0u6ysMqcwO8djePC/wDaJLOBzqtZTdxT6","adress":"Test21","telephone":"","status":4,"nSecu":"","mutuel":"","DispoDate":[],"copyDispoDate":[],"plaqueImmat":"","antecedent":[""],"__v":0},{"_id":"61c588bc5e67c4b5a399101b","email":"Test100","nom":"Test100","documents":[""],"prenom":"Test100","photo":[""],"password":"$2b$10$ueqi00dWqizyiju9FAYhU.Sh/kz0DQramn.0JNQH00BT3bf/YhAVG","adress":"13008","telephone":"","status":4,"nSecu":"","mutuel":"","DispoDate":[],"copyDispoDate":[],"plaqueImmat":"","antecedent":[""],"__v":0},{"_id":"61c58b345e67c4b5a3991022","email":"Test101","nom":"Test101","documents":[""],"prenom":"Test101","photo":[""],"password":"$2b$10$dNu9CNNE3jsXmMssBs3k2e5lqK0h2UhMBTwCbUrT7GiBsmVqUGfI.","adress":"13008","telephone":"","status":4,"nSecu":"","mutuel":"","DispoDate":[],"copyDispoDate":[],"plaqueImmat":"","antecedent":[""],"__v":0},{"_id":"61c58c045e67c4b5a399102a","email":"Test201","nom":"Test201","documents":[""],"prenom":"Test201","photo":[""],"password":"$2b$10$PC/9.vH3xfOC3PuRKpEneeDfeNS1DhYyOR/lTHR1CwkKgj.9327da","adress":"Test201","telephone":"","status":4,"nSecu":"","mutuel":"","DispoDate":[],"copyDispoDate":[],"plaqueImmat":"","antecedent":[""],"__v":0},{"_id":"61c58dde5e67c4b5a3991031","email":"Test300","nom":"Test300","documents":[""],"prenom":"Test300","photo":[""],"password":"$2b$10$NWYrVfQJClnWFHRrBdYZPeHlJVtIsg4tEQiT6qZfWeH7Ocn4j2LrS","adress":"Test300","telephone":"","status":4,"nSecu":"","mutuel":"","DispoDate":[],"copyDispoDate":[],"plaqueImmat":"","antecedent":[""],"__v":0}]})
})

test("route addprescription", async () => {
  await request(app).post("/addprescription")
    .send({ prescription: {
      acknowledged: false,
      modifiedCount: 0,
      upsertedId: null,
      upsertedCount: 0,
      matchedCount: 0
    } })
    .expect(200)
    .expect({prescription: {
      acknowledged: true,
      modifiedCount: 0,
      upsertedId: null,
      upsertedCount: 0,
      matchedCount: 0
    }})
  })



    test("route recepMyprescription", async () => {
      await request(app).post("/recepMyprescription")
        .send({ "_id" : "61ba5d3ee690d34bf22f96ab" })
        .expect(200)
        .expect({"prescription" : "null"})
      })
    
    

