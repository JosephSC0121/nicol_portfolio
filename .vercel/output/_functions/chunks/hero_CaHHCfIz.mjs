const hero = new Proxy({"src":"/_astro/hero.DH8k6ReV.png","width":408,"height":612,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/joseph/workspace/nico/sorollaportfolio/src/assets/hero.png";
							}
							
							return target[name];
						}
					});

export { hero as default };
