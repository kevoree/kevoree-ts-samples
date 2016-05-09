
/**
     * Created by barais on 20/01/15.
     */
declare module LCD {

  export class Jhd1313m1 {
    constructor(bus:number, lcdAddress :number, rgbAddress :number);

  write(x:number, y:number, msg:string):mraa_result_t;

  write(msg:string) :mraa_result_t;
  setCursor(row:number, column:number) :mraa_result_t;
  clear():mraa_result_t;
  home():mraa_result_t;
  name() : string ;

  /**
 * Makes the LCD scroll text
 *
 * @param direction True if scrolling to the right
 * @return Result of the operation
 */
 scroll(direction:Boolean):mraa_result_t;
/**
 * Sets the color of the backlight
 *
 * @param r 0-255 value for red
 * @param g 0-255 value for green
 * @param b 0-255 value for blue
 * @return Result of the operation
 */
 setColor(r:number, g:number, b:number):mraa_result_t;

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

}
export = LCD;
