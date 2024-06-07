import { LoggerService } from "src/app/services/logger.service";
import { MathService } from "./math.service";

let loggerService: LoggerService ;
let mathService: MathService;

fdescribe("MathService", () => {
  beforeAll(() => {
    // Arrange
    loggerService = new LoggerService();
    mathService = new MathService(loggerService);
  });
  it("should add two numbers", () => {
    // Act
    const result = mathService.add(2,3);
    // Assert
    const expectedResult = 5;
    expect(result).toEqual(expectedResult);
  })
  it("should substract two numbers", () => {
    // Act
    const result = mathService.substract(2,3);
    // Assert
    const expectedResult = -1;
    expect(result).toEqual(expectedResult);
  })
});
