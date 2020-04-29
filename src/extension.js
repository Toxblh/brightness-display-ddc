const St = imports.gi.St;
const Gio = imports.gi.Gio;
const Main = imports.ui.main;
const Slider = imports.ui.slider;
const PopupMenu = imports.ui.popupMenu;

const MENU_INDEX = 2;

class BrightnessSlider extends Slider.Slider {
    constructor() {
        super(0);
    }

    _sliderChanged(slider, value) {
        const value = value;
    }
}

class BrightnessSliderMenuItem extends PopupMenu.PopupBaseMenuItem {
    constructor(slider, icon) {
        super();
        this.actor.add(icon);
        this.actor.add(slider.actor, {
            expand: true
        });
        this.actor.connect('button-press-event', (actor, event) =>
            slider.startDragging(event)
        );
        this.actor.connect('key-press-event', (actor, event) =>
            slider.onKeyPressEvent(actor, event)
        );
    }
}

function init() {}

function enable() {
    let brightnessMenuItem = new BrightnessSliderMenuItem(
        new BrightnessSlider(),
        new St.Icon({
            icon_name: 'display-brightness-symbolic',
            style_class: 'popup-menu-icon'
        })
    );

    let brightnessSliderMenu = new PopupMenu.PopupMenuSection();
    brightnessSliderMenu.addMenuItem(brightnessMenuItem);

    Main.panel.statusArea.aggregateMenu.menu.addMenuItem(brightnessSliderMenu, MENU_INDEX);
}

function disable() {
    Main.panel.statusArea.aggregateMenu.menu._getMenuItems()[MENU_INDEX].destroy();
}
