for (let i = 0; i < 100; i++) {
  setTimeout(()=>{
    console.log(`task ${i} is on`)
  },i*1000)
}