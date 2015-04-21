
/**
     * Created by barais on 20/01/15.
     */
declare module mraa {
  function getVersion(): string;
  function setPriority(priority: number): number;
  function getPlatformType(): mraa_platform_t;
  function printError(result: mraa_result_t): void;
  function pinModeTest(pin: number, mode: mraa_pinmodes_t): boolean;
  function adcRawBits(): number;
  function adcSupportedBits(): number;
  function getPlatformName(): string;
  function setLogLevel(level: number): mraa_result_t;
  export class I2c {
    constructor(bus: number, raw: boolean);
    constructor(bus: number);
    frequency(mode: mraa_i2c_mode_t): mraa_result_t;
    address(address: number): mraa_result_t;
    readByte(): number;
    read(b: Buffer): number;
    readReg(reg: number): number;
    readWordReg(reg: number): number;
    writeByte(data: Buffer): mraa_result_t;
    write(data: Buffer): mraa_result_t;
    writeReg(data: Buffer): mraa_result_t;
    writeWordReg(data: Buffer): mraa_result_t;

  }
  export enum Mode {
    MODE_STRONG = 0,
    MODE_PULLUP = 1,
    MODE_PULLDOWN = 2,
    MODE_HIZ = 3
  }
  export enum Dir {
    DIR_OUT = 0,
    DIR_IN = 1,
    DIR_OUT_HIGH = 2,
    DIR_OUT_LOW = 3
  }
  export enum Edge {
    EDGE_NONE = 0,
    EDGE_BOTH = 1,
    EDGE_RISING = 2,
    EDGE_FALLING = 3
  }
  export class Gpio {
    constructor(pin: number, owner: boolean, raw: boolean);
    constructor(pin: number);
    edge(mode: Edge): mraa_result_t;
    //isr(mode : Edge ,  : void , args : void): mraa_result_t;
    isrExit(): mraa_result_t;
    mode(mode: Mode): mraa_result_t;
    dir(dir: Dir): mraa_result_t;
    read(): number;
    write(value: number): mraa_result_t;
    useMmap(enable: boolean): mraa_result_t;
    getPin(): number;

  }
  export enum Spi_Mode {
    SPI_MODE0 = 0,
    SPI_MODE1 = 1,
    SPI_MODE2 = 2,
    SPI_MODE3 = 3
  }
  export class Spi {
    constructor(bus: number);
    constructor();
    mode(mode: Spi_Mode): mraa_result_t;
    frequency(hz: number): mraa_result_t;
    writeByte(data: Buffer): number;
    write(txBuf: Buffer): number;
    transfer(txBuf: Buffer, rxBuf: Buffer): mraa_result_t;
    lsbmode(lsb: boolean): mraa_result_t;
    bitPerWord(bits: number): mraa_result_t;

  }
  export class Uart {
    constructor(uart: number);
    constructor();
    getDevicePath(): string;

  }
  export class Aio {
    constructor(pin: number);
    constructor();
    read(): number;
    setBit(bits: number): mraa_result_t;
    getBit(): number;

  }
  export enum mraa_platform_t {
    MRAA_INTEL_GALILEO_GEN1 = 0,
    MRAA_INTEL_GALILEO_GEN2 = 1,
    MRAA_INTEL_EDISON_FAB_C = 2,
    MRAA_INTEL_DE3815 = 3,
    MRAA_INTEL_MINNOWBOARD_MAX = 4,
    MRAA_RASPBERRY_PI_B = 5,
    MRAA_UNKNOWN_PLATFORM = 99
  }
  export enum mraa_intel_edison_miniboard_t {
    MRAA_INTEL_EDISON_MINIBOARD_J17_1 = 0,
    MRAA_INTEL_EDISON_MINIBOARD_J17_5 = 4,
    MRAA_INTEL_EDISON_MINIBOARD_J17_7 = 6,
    MRAA_INTEL_EDISON_MINIBOARD_J17_8 = 7,
    MRAA_INTEL_EDISON_MINIBOARD_J17_9 = 8,
    MRAA_INTEL_EDISON_MINIBOARD_J17_10 = 9,
    MRAA_INTEL_EDISON_MINIBOARD_J17_11 = 10,
    MRAA_INTEL_EDISON_MINIBOARD_J17_12 = 11,
    MRAA_INTEL_EDISON_MINIBOARD_J17_14 = 13,
    MRAA_INTEL_EDISON_MINIBOARD_J18_1 = 14,
    MRAA_INTEL_EDISON_MINIBOARD_J18_2 = 15,
    MRAA_INTEL_EDISON_MINIBOARD_J18_6 = 19,
    MRAA_INTEL_EDISON_MINIBOARD_J18_7 = 20,
    MRAA_INTEL_EDISON_MINIBOARD_J18_8 = 21,
    MRAA_INTEL_EDISON_MINIBOARD_J18_10 = 23,
    MRAA_INTEL_EDISON_MINIBOARD_J18_11 = 24,
    MRAA_INTEL_EDISON_MINIBOARD_J18_12 = 25,
    MRAA_INTEL_EDISON_MINIBOARD_J18_13 = 26,
    MRAA_INTEL_EDISON_MINIBOARD_J19_4 = 31,
    MRAA_INTEL_EDISON_MINIBOARD_J19_5 = 32,
    MRAA_INTEL_EDISON_MINIBOARD_J19_6 = 33,
    MRAA_INTEL_EDISON_MINIBOARD_J19_8 = 35,
    MRAA_INTEL_EDISON_MINIBOARD_J19_9 = 36,
    MRAA_INTEL_EDISON_MINIBOARD_J19_10 = 37,
    MRAA_INTEL_EDISON_MINIBOARD_J19_11 = 38,
    MRAA_INTEL_EDISON_MINIBOARD_J19_12 = 39,
    MRAA_INTEL_EDISON_MINIBOARD_J19_13 = 40,
    MRAA_INTEL_EDISON_MINIBOARD_J19_14 = 41,
    MRAA_INTEL_EDISON_MINIBOARD_J20_3 = 44,
    MRAA_INTEL_EDISON_MINIBOARD_J20_4 = 45,
    MRAA_INTEL_EDISON_MINIBOARD_J20_5 = 46,
    MRAA_INTEL_EDISON_MINIBOARD_J20_6 = 47,
    MRAA_INTEL_EDISON_MINIBOARD_J20_7 = 48,
    MRAA_INTEL_EDISON_MINIBOARD_J20_8 = 49,
    MRAA_INTEL_EDISON_MINIBOARD_J20_9 = 50,
    MRAA_INTEL_EDISON_MINIBOARD_J20_10 = 51,
    MRAA_INTEL_EDISON_MINIBOARD_J20_11 = 52,
    MRAA_INTEL_EDISON_MINIBOARD_J20_12 = 53,
    MRAA_INTEL_EDISON_MINIBOARD_J20_13 = 54,
    MRAA_INTEL_EDISON_MINIBOARD_J20_14 = 55
  }
  export enum mraa_intel_edison_t {
    MRAA_INTEL_EDISON_GP182 = 0,
    MRAA_INTEL_EDISON_GP135 = 4,
    MRAA_INTEL_EDISON_GP27 = 6,
    MRAA_INTEL_EDISON_GP20 = 7,
    MRAA_INTEL_EDISON_GP28 = 8,
    MRAA_INTEL_EDISON_GP111 = 0,
    MRAA_INTEL_EDISON_GP109 = 10,
    MRAA_INTEL_EDISON_GP115 = 11,
    MRAA_INTEL_EDISON_GP128 = 13,
    MRAA_INTEL_EDISON_GP13 = 14,
    MRAA_INTEL_EDISON_GP165 = 15,
    MRAA_INTEL_EDISON_GP19 = 19,
    MRAA_INTEL_EDISON_GP12 = 20,
    MRAA_INTEL_EDISON_GP183 = 21,
    MRAA_INTEL_EDISON_GP110 = 23,
    MRAA_INTEL_EDISON_GP114 = 24,
    MRAA_INTEL_EDISON_GP129 = 25,
    MRAA_INTEL_EDISON_GP130 = 26,
    MRAA_INTEL_EDISON_GP44 = 31,
    MRAA_INTEL_EDISON_GP46 = 32,
    MRAA_INTEL_EDISON_GP48 = 33,
    MRAA_INTEL_EDISON_GP131 = 35,
    MRAA_INTEL_EDISON_GP14 = 36,
    MRAA_INTEL_EDISON_GP40 = 37,
    MRAA_INTEL_EDISON_GP43 = 38,
    MRAA_INTEL_EDISON_GP77 = 39,
    MRAA_INTEL_EDISON_GP82 = 40,
    MRAA_INTEL_EDISON_GP83 = 41,
    MRAA_INTEL_EDISON_GP134 = 44,
    MRAA_INTEL_EDISON_GP45 = 45,
    MRAA_INTEL_EDISON_GP47 = 46,
    MRAA_INTEL_EDISON_GP49 = 47,
    MRAA_INTEL_EDISON_GP15 = 48,
    MRAA_INTEL_EDISON_GP84 = 49,
    MRAA_INTEL_EDISON_GP42 = 50,
    MRAA_INTEL_EDISON_GP41 = 51,
    MRAA_INTEL_EDISON_GP78 = 52,
    MRAA_INTEL_EDISON_GP79 = 53,
    MRAA_INTEL_EDISON_GP80 = 54,
    MRAA_INTEL_EDISON_GP81 = 55
  }
  export enum mraa_result_t {
    MRAA_SUCCESS = 0,
    MRAA_ERROR_FEATURE_NOT_IMPLEMENTED = 1,
    MRAA_ERROR_FEATURE_NOT_SUPPORTED = 2,
    MRAA_ERROR_INVALID_VERBOSITY_LEVEL = 3,
    MRAA_ERROR_INVALID_PARAMETER = 4,
    MRAA_ERROR_INVALID_HANDLE = 5,
    MRAA_ERROR_NO_RESOURCES = 6,
    MRAA_ERROR_INVALID_RESOURCE = 7,
    MRAA_ERROR_INVALID_QUEUE_TYPE = 8,
    MRAA_ERROR_NO_DATA_AVAILABLE = 9,
    MRAA_ERROR_INVALID_PLATFORM = 10,
    MRAA_ERROR_PLATFORM_NOT_INITIALISED = 11,
    MRAA_ERROR_PLATFORM_ALREADY_INITIALISED = 12,
    MRAA_ERROR_UNSPECIFIED = 99
  }
  export enum mraa_pinmodes_t {
    MRAA_PIN_VALID = 0,
    MRAA_PIN_GPIO = 1,
    MRAA_PIN_PWM = 2,
    MRAA_PIN_FAST_GPIO = 3,
    MRAA_PIN_SPI = 4,
    MRAA_PIN_I2C = 5,
    MRAA_PIN_AIO = 6,
    MRAA_PIN_UART = 7
  }
  export enum mraa_i2c_mode_t {
    MRAA_I2C_STD = 0,
    MRAA_I2C_FAST = 1,
    MRAA_I2C_HIGH = 2
  }
  export class Pwm {
    constructor(pin: number, owner: boolean, chipid: number);
    constructor(pin: number);
    write(percentage: number): mraa_result_t;
    read(): number;
    period(period: number): mraa_result_t;
    period_ms(ms: number): mraa_result_t;
    period_us(us: number): mraa_result_t;
    pulsewidth(seconds: number): mraa_result_t;
    pulsewidth_ms(ms: number): mraa_result_t;
    pulsewidth_us(us: number): mraa_result_t;
    enable(enable: boolean): mraa_result_t;
    config_ms(period: number, duty: number): mraa_result_t;
    config_percent(period: number, duty: number): mraa_result_t;
  }

}
export = mraa;
