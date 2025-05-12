document.addEventListener('DOMContentLoaded', () => {
    // 獲取元素
    const canvas = document.getElementById('colorSpotlight');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // 圖片元素
    const bwImage = new Image();
    const colorImage = new Image();
    
    // 設置圖片來源
    bwImage.src = '/img/tree-background-bw.jpg'; // 黑白圖片路徑
    colorImage.src = '/img/tree-background-color.jpg'; // 彩色圖片路徑
    
    // 滑鼠位置
    let mouseX = 0;
    let mouseY = 0;
    let radius = 100; // 聚光燈半徑
    
    // 調整 canvas 尺寸
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawImages();
    }
    
    // 滑鼠移動事件處理
    function handleMouseMove(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      drawImages();
    }
    
    // 觸控設備支援
    function handleTouchMove(e) {
      if (e.touches.length > 0) {
        mouseX = e.touches[0].clientX;
        mouseY = e.touches[0].clientY;
        drawImages();
      }
    }
    
    // 繪製圖片
    function drawImages() {
      if (!bwImage.complete || !colorImage.complete) return;
      
      // 調整圖片尺寸以填滿畫布，保持比例
      const imageAspect = bwImage.width / bwImage.height;
      const canvasAspect = canvas.width / canvas.height;
      
      let drawWidth, drawHeight, offsetX, offsetY;
      
      if (imageAspect > canvasAspect) {
        // 圖片較寬
        drawHeight = canvas.height;
        drawWidth = drawHeight * imageAspect;
        offsetX = (canvas.width - drawWidth) / 2;
        offsetY = 0;
      } else {
        // 圖片較高
        drawWidth = canvas.width;
        drawHeight = drawWidth / imageAspect;
        offsetX = 0;
        offsetY = (canvas.height - drawHeight) / 2;
      }
      
      // 繪製黑白圖片作為背景
      ctx.drawImage(bwImage, offsetX, offsetY, drawWidth, drawHeight);
      
      // 設置彩色聚光燈效果
      ctx.save();
      ctx.beginPath();
      ctx.arc(mouseX, mouseY, radius, 0, Math.PI * 2, false);
      ctx.closePath();
      ctx.clip();
      
      // 在聚光燈區域內繪製彩色圖片
      ctx.drawImage(colorImage, offsetX, offsetY, drawWidth, drawHeight);
      ctx.restore();
    }
    
    // 綁定事件
    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('touchmove', handleTouchMove);
    
    // 當圖片載入完成時初始化畫布
    bwImage.onload = colorImage.onload = () => {
      resizeCanvas();
    };
  });