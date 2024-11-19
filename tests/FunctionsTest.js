describe("Drawing App Functionality", function () {
    let paintCanvas, colorPicker, context, lineWidthRange, lineWidthLabel;
  
    beforeEach(function () {
      paintCanvas = document.querySelector(".js-paint");
      colorPicker = document.querySelector(".js-color-picker");
      lineWidthRange = document.querySelector(".js-line-range");
      lineWidthLabel = document.querySelector(".js-range-value");

      context = paintCanvas.getContext("2d");
  
      context.clearRect(0, 0, paintCanvas.width, paintCanvas.height);
    });
  
    // Task 1: Test color picker functionality
    it("should update stroke color when the color picker changes", function () {
      colorPicker.value = "#ff0000";
      colorPicker.dispatchEvent(new Event('change'));
  
      expect(context.strokeStyle).toBe("#ff0000");
    });
  
    // Task 2: Test line width adjuster functionality
    it("should update the line width when the range input changes", function () {
      lineWidthRange.value = 10;
      lineWidthRange.dispatchEvent(new Event('input'));
      expect(context.lineWidth).toBe(10);
      expect(lineWidthLabel.innerHTML).toBe("10");
    });
  
    // Task 3: Test drawing functionality without using spyOn
    it("should draw lines on the canvas when mouse events are triggered", function () {
      const beforeImageData = context.getImageData(0, 0, paintCanvas.width, paintCanvas.height);
  
      const mousedownEvent = new MouseEvent('mousedown', {
        bubbles: true,
        cancelable: true,
        view: window,
      });
      Object.defineProperty(mousedownEvent, 'offsetX', { get: () => 100 });
      Object.defineProperty(mousedownEvent, 'offsetY', { get: () => 100 });
      paintCanvas.dispatchEvent(mousedownEvent);
  
      const mousemoveEvent = new MouseEvent('mousemove', {
        bubbles: true,
        cancelable: true,
        view: window,
      });
      Object.defineProperty(mousemoveEvent, 'offsetX', { get: () => 150 });
      Object.defineProperty(mousemoveEvent, 'offsetY', { get: () => 150 });
      paintCanvas.dispatchEvent(mousemoveEvent);
  
      const mouseupEvent = new MouseEvent('mouseup', {
        bubbles: true,
        cancelable: true,
        view: window,
      });
      paintCanvas.dispatchEvent(mouseupEvent);
  

      const afterImageData = context.getImageData(0, 0, paintCanvas.width, paintCanvas.height);
  

      let isCanvasChanged = false;
      for (let i = 0; i < beforeImageData.data.length; i++) {
        if (beforeImageData.data[i] !== afterImageData.data[i]) {
          isCanvasChanged = true;
          break;
        }
      }
  
      expect(isCanvasChanged).toBe(true);
    });
  });
  