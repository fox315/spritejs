(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{551:function(n,e,a){"use strict";a.r(e),e.default="/* globals dat */\nconst {Scene} = spritejs;\nconst {Cube, shaders} = spritejs.ext3d;\n\nconst container = document.getElementById('container');\nconst scene = new Scene({container});\nconst layer = scene.layer3d('fglayer', {\n  camera: {\n    fov: 35, // \u76f8\u673a\u7684\u89c6\u91ce\n    pos: [3, 3, 5], // \u76f8\u673a\u7684\u4f4d\u7f6e\n  },\n});\n\nconst camera = layer.camera;\ncamera.lookAt([0, 0, 0]);\n\nconst program = layer.createProgram({\n  ...shaders.NORMAL_GEOMETRY,\n  cullFace: null,\n});\n\nconst cube = new Cube(program, {\n  colors: 'red red blue blue green green',\n});\nlayer.append(cube);\n\n\nconst initGui = () => {\n  const gui = new dat.GUI();\n  const lookAt = [0, 0, 0];\n  gui.add({x: 3}, 'x', -5, 5, 0.01).onChange((val) => {\n    camera.attributes.x = val;\n    camera.lookAt(lookAt);\n  });\n  gui.add({y: 3}, 'y', -5, 5, 0.01).onChange((val) => {\n    camera.attributes.y = val;\n    camera.lookAt(lookAt);\n  });\n  gui.add({z: 5}, 'z', -5, 5, 0.01).onChange((val) => {\n    camera.attributes.z = val;\n    camera.lookAt(lookAt);\n  });\n  gui.add({lookAt: '0,0,0'}, 'lookAt').onChange((val) => {\n    const value = val.split(',').map(v => Number(v));\n    lookAt[0] = value[0] || 0;\n    lookAt[1] = value[1] || 0;\n    lookAt[2] = value[2] || 0;\n    camera.lookAt(lookAt);\n  });\n};\n\ninitGui();"}}]);