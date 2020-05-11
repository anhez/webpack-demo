let TPAConfigs,alterTPAConfigs
const doSomeThing = async () => {
  await doBThing()
}
const doBThing = () => {
  console.log(123)
}

TPAConfigs = {...TPAConfigs,...alterTPAConfigs}
doSomeThing()
