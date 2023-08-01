export const canBuildUI = (developer: any) =>  {
  return {
    buildUI: () => console.log(`${developer.name} is building UI...`)
  }
}

export const canBuildAPI = (developer: any) => {
  return {
    buildAPI: () => console.log(`${developer.name} is building API...`)
  }
}

export const canDeployApp = (developer: any) => {
  return {
    deployApp: ()=>  console.log(`${developer.name} is deploying app...`)
  }
} 