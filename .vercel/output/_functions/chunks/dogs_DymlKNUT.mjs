const dogs = new Proxy({"src":"/_astro/dogs.DqMaZktt.webp","width":4096,"height":3072,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/joseph/workspace/nico/sorollaportfolio/src/assets/dogs.webp";
							}
							
							return target[name];
						}
					});

export { dogs as default };
