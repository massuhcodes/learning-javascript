// @ts-check

/**
 * window's size
 * @param {number} width
 * @param {number} height
 *
 * using prototype syntax
 */
export function Size(width = 80, height = 60) {
    this.width = width;
    this.height = height;
}

/**
 * resizes window's size
 * @param {number} newWidth - adjusting width
 * @param {number} newHeight - adjusting height
 */
Size.prototype.resize = function (newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
};

/**
 * window's position in a x-y coordinate system
 * @param {number} x - window's x-coordinate
 * @param {number} y - window's y-coordinate
 */
export function Position(x = 0, y = 0) {
    this.x = x;
    this.y = y;
}

/**
 * moves window's position
 * @param {number} newX - adjusting window's x-coordinate
 * @param {number} newY - adjusting window's y-coordinate
 */
Position.prototype.move = function (newX, newY) {
    this.x = newX;
    this.y = newY;
};

/**
 * The window itself
 */
export class ProgramWindow {
    constructor() {
        this.screenSize = new Size(800, 600);
        this.size = new Size();
        this.position = new Position();
    }

    /**
     * Takes in a side and verifies if it is appropriate to
     * resize; otherwise, it clips based on the right
     * dimensions
     * @param {Size} size - the new size to resize to
     */
    resize(size) {
        // if either the width or heigth is less than 1
        // clip to 1
        if (size.width < 1) {
            size.width = 1;
        }
        if (size.height < 1) {
            size.height = 1;
        }
        // if the resize is within the fixed sceen size, allow it
        if (
            this.position.x + size.width <= 800 &&
            this.position.y + size.height <= 600
        ) {
            this.size.resize(size.width, size.height);
            // otherwise clip each dimension appropriately
        } else {
            if (this.position.x + size.width > 800) {
                this.size.width = 800 - this.position.x;
            }
            if (this.position.y + size.height > 600) {
                this.size.height = 600 - this.position.y;
            }
        }
    }

    /**
     * Takes in a position and verifies if it is appropriate
     * to move to; otherwise, it automatically resizes based
     * on the appropriate dimensions
     * @param {Position} position - the new Position to more to
     */
    move(position) {
        if (position.x < 0) {
            position.x = 0;
        }
        if (position.y < 0) {
            position.y = 0;
        }
        if (
            position.x + this.size.width <= 800 &&
            position.y + this.size.height <= 600
        ) {
            this.position.move(position.x, position.y);
        } else {
            if (position.x + this.size.width > 800) {
                position.x -= position.x + this.size.width - 800;
                this.position.x = position.x;
            }
            if (position.y + this.size.height > 600) {
                position.y -= position.y + this.size.height - 600;
                this.position.y = position.y;
            }
        }
    }
}

/**
 * Resize and move the window
 * @param {ProgramWindow} programWindow - a window instance
 * @returns - the modified window
 */
export function changeWindow(programWindow) {
    programWindow.resize(new Size(400, 300));
    programWindow.move(new Position(100, 150));
    return programWindow;
}
