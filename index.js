module.exports = function positioner (position, browserWindow, trayPosition) {
  var electronScreen = require('screen')

  // Get window size
  var windowSize = (typeof browserWindow.getSize === 'function') ? browserWindow.getSize() : browserWindow

  // Get screen size
  var screenSize = electronScreen.getDisplayNearestPoint(electronScreen.getCursorScreenPoint()).workArea

  // Positions
  var positions = {
    trayLeft: {
      x: Math.floor(trayPosition.x),
      y: 0
    },
    trayBottomLeft: {
      x: Math.floor(trayPosition.x),
      y: Math.floor(screenSize.height - (windowSize[1] - screenSize.y))
    },
    trayRight: {
      x: Math.floor(trayPosition.x - (windowSize[0]) + trayPosition.width),
      y: 0
    },
    trayBottomRight: {
      x: Math.floor(trayPosition.x - (windowSize[0]) + trayPosition.width),
      y: Math.floor(screenSize.height - (windowSize[1] - screenSize.y))
    },
    trayCenter: {
      x: Math.floor(trayPosition.x - ((windowSize[0] / 2)) + (trayPosition.width / 2)),
      y: 0
    },
    trayBottomCenter: {
      x: Math.floor(trayPosition.x - ((windowSize[0] / 2)) + (trayPosition.width / 2)),
      y: Math.floor(screenSize.height - (windowSize[1] - screenSize.y))
    },
    topLeft: {
      x: screenSize.x,
      y: screenSize.y
    },
    topRight: {
      x: Math.floor(screenSize.x + (screenSize.width - windowSize[0])),
      y: screenSize.y
    },
    bottomLeft: {
      x: screenSize.x,
      y: Math.floor(screenSize.height - (windowSize[1] - screenSize.y))
    },
    bottomRight: {
      x: Math.floor(screenSize.x + (screenSize.width - windowSize[0])),
      y: Math.floor(screenSize.height - (windowSize[1] - screenSize.y))
    },
    topCenter: {
      x: Math.floor(screenSize.x + ((screenSize.width / 2) - (windowSize[0] / 2))),
      y: screenSize.y
    },
    bottomCenter: {
      x: Math.floor(screenSize.x + ((screenSize.width / 2) - (windowSize[0] / 2))),
      y: Math.floor(screenSize.height - (windowSize[1] - screenSize.y))
    },
    center: {
      x: Math.floor(screenSize.x + ((screenSize.width / 2) - (windowSize[0] / 2))),
      y: Math.floor(((screenSize.height + screenSize.y) / 2) - (windowSize[1] / 2))
    }
  }

  // Set the windows position or just return x,y
  if (typeof browserWindow.setPosition === 'function') {
    browserWindow.setPosition(positions[position].x, positions[position].y)
    return
  }

  return {
    x: positions[position].x,
    y: positions[position].y
  }
}
