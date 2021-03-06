// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application";

import AutoSubmitController from "./auto_submit_controller";
application.register("auto-submit", AutoSubmitController);

import ClipboardController from "./clipboard_controller";
application.register("clipboard", ClipboardController);

import CloseFlashController from "./close_flash_controller";
application.register("close-flash", CloseFlashController);

import EmptyStateController from "./empty_state_controller";
application.register("empty-state", EmptyStateController);

import ModeController from "./mode_controller";
application.register("mode", ModeController);

import ToggleController from "./toggle_controller";
application.register("toggle", ToggleController);

import ValidatePinController from "./validate_pin_controller";
application.register("validate-pin", ValidatePinController);
