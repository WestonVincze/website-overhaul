import React, { useEffect } from 'react'
import * as BABYLON from 'babylonjs'

export const BabylonScene = (): JSX.Element => {
  useEffect(() => {
    const canvas = document.getElementById('renderCanvas') as HTMLCanvasElement
    const engine = new BABYLON.Engine(canvas, true)
    const scene = new BABYLON.Scene(engine)
    const camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), scene)

    camera.setTarget(BABYLON.Vector3.Zero())
    camera.attachControl(canvas, true)

    const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, 0), scene)
    light.intensity = 0.7

    const sphere = BABYLON.MeshBuilder.CreateSphere('sphere', { diameter: 2, segments: 32 }, scene)
    sphere.position.y = 1

    engine.runRenderLoop(() => {
      scene.render()
    })

    return () => {
      // Clean up resources if needed
      scene.dispose()
      engine.dispose()
    }
  }, [])

  return (<canvas id="renderCanvas" />)
}

export default BabylonScene
