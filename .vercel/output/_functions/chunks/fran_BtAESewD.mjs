const fran = new Proxy({"src":"/_astro/fran.C8W9DBRM.jpg","width":1600,"height":623,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/joseph/workspace/nico/sorollaportfolio/src/assets/fran.jpg";
							}
							
							return target[name];
						}
					});

export { fran as default };
