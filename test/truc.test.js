var app = require("../app")
var request = require("supertest")

test("route1", async () => {
await request(app).post("/addFirstName")
  .send({ "firstname": "John" , "twoname": "robert"})
  .expect(200)
  .expect({ enter: true })
})


test("route2", async () => {
    await request(app).post("/addFirstName")
      .send({ "firstname": null , "twoname": null })
      .expect(200)
      .expect({ enter: false })
    })

    test("route3", async () => {
        await request(app).post("/addFirstName")
          .send({ "firstname": null , "twoname": "test" })
          .expect(200)
          .expect({ enter: false })
        })

        test("route3", async () => {
            await request(app).post("/addFirstName")
              .send({ "firstname": "test" , "twoname": null })
              .expect(200)
              .expect({ enter: false })
            })