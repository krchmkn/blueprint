import Bridge from "./Bridge";
import ModernBridge from "./ModernBridge";
import PortableDevice from "./PortableDevice";
import StandaloneDevice from "./StandaloneDevice";

const standaloneDevice = new StandaloneDevice();
const bridge = new Bridge(standaloneDevice);
bridge.start();

const portableDevice = new PortableDevice();
const modernBridge = new ModernBridge(portableDevice);
modernBridge.start();
modernBridge.restart();
