import si from 'systeminformation';
import prettyBytes from 'pretty-bytes';
import { inspect } from 'util';

console.log(
	inspect(
		{
			motherboard: await si.baseboard(),
			cpu: await si.cpu().then((cpu) => ({
				manufacturer: cpu.manufacturer,
				brand: cpu.brand,
				vendor: cpu.vendor,
				speed: cpu.speed,
				speedMin: cpu.speedMin,
				speedMax: cpu.speedMax,
				cores: cpu.cores,
				physicalCores: cpu.physicalCores,
				processors: cpu.processors,
				socket: cpu.socket,
			})),
			graphics: await si.graphics().then((graphics) => ({
				controllers: graphics.controllers.map((controller) => ({
					vendor: controller.vendor,
					subVendor: controller.subVendor,
					model: controller.model,
					name: controller.name,
				})),
				displays: graphics.displays.map((display) => ({
					vendor: display.vendor,
					model: display.model,
					pixelDepth: display.pixelDepth,
					resolutionX: display.resolutionX,
					resolutionY: display.resolutionY,
					currentRefreshRate: display.currentRefreshRate,
				})),
			})),
			memory: await si.mem().then((memory) => ({
				total: prettyBytes(memory.total),
				buffcache: prettyBytes(memory.buffcache),
				swaptotal: prettyBytes(memory.swaptotal),
			})),
			memoryLayout: await si.memLayout().then((memoryLayout) =>
				memoryLayout.map((memory) => ({
					size: prettyBytes(memory.size),
					bank: memory.bank,
					type: memory.type,
					ecc: memory.ecc,
					clockSpeed: memory.clockSpeed,
				})),
			),
			disks: await si.diskLayout().then((disks) =>
				disks.map((disk) => ({
					type: disk.type,
					name: disk.name,
					vendor: disk.vendor,
					size: prettyBytes(disk.size),
					interfaceType: disk.interfaceType,
				})),
			),
			system: await si.system().then((system) => ({
				manufacturer: system.manufacturer,
				model: system.model,
			})),
		},
		{ depth: null },
	),
);
