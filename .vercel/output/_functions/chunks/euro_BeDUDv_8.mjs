const euro = new Proxy({"src":"/_astro/euro.COiNf8yY.png","width":1024,"height":1024,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/joseph/workspace/nico/sorollaportfolio/src/assets/euro.png";
							}
							
							return target[name];
						}
					});

export { euro as default };
