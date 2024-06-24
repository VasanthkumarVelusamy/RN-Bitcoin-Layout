export default new Array(100)
.fill(null)
.map((v, i) => ({ key: i.toString(), value: `Item ${i}` }))
