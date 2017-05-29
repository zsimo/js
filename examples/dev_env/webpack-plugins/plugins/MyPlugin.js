/**
 * Created by Simone.Sacchi on 28/04/2017.
 */

"use strict";

class MyPlugin {

    constructor() {
        /**
         * Constructors on webpack plugins are optional.
         * They are only needed if you are planning on allowing your user to pass options.
         * @example
         * this.message = param;
         */
        console.log("pluginDidMount (Constructor)", "BasicPlugin");


    }

    /**
     * @name apply
     * @description This method is invoked by the Compiler on "registration" and an instance of the Compiler is passed in as a parameter.
     * @param {Compiler} compiler - This is the Compiler instance. AKA "Webacpk Central Dispatch"
     *
     * @memberOf MyPlugin
     */
    apply(compiler) {
        /**
         * How to hook (single hook)
         */
        compiler.plugin("run", (compiler, callback) => {
            console.log("run");
            callback();
        });
        compiler.plugin("watch-run", (compiler, callback) => {
            console.log("watch-run");
            callback();
        });

        /**
         * @param {CompilerParams} params - params holds the default module factories as well
         * as compilation dependencies in a single object
         * @param {Function} callback - callback to inform the compiler to continue
         * @description "before-compile" - This purpose of this hook is to perform functionality before the `compiler` hook has executed and is run.
         * Examples of things that are done within webpack source for this hook include storing files (See DllReferencePlugin:22).
         *
         */
        compiler.plugin("before-compile", (params, callback) => {
            const {normalModuleFactory, contextModuleFactory} = params;
            const foo = "DO SOMETHING AND SET IT UP BEFORE COMPILE STEP";
            params.foo = foo;

            console.log(`compiler:before-compile:Param Added:Params: -- ${Object.keys(params)}`);

            callback();
        });

        /**
         * @param {Error} error - The error Object<Error> that gets emitted with the "failed" event.
         * @description "failed" - This error occurs when a build has failed. An error is provided to emit or read details.
         * Great for all sorts of diagnostics, reported or custom error hooking in your own plugin.
         */
        compiler.plugin("failed", (error) => {
            console.log("failed");
        });

        /**
         * @param {Compiler} compilation - The Compilation Instance (contains dependency graph information, etc)
         * @param {Function} callback - callback which signals the hook is finished and that webpack can continue to next step().
         * @description "emit" - This event emits just before webpack is about to emit assets to the output.path directory location.
         * This is one of the last moments you can add custom generated assets inside of `compilation.assets` (an object with key value pairs of filename:RawSource)
         */
        compiler.plugin("emit", (compilation, callback) => {
            console.log("emit");
            // maybe the place where delete previous bundle -> do non erase in case of error
            console.log(compilation.assets);
            callback();
        })
        compiler.plugin("done", (stats) => {
            console.log("done");
            // no need to callback here

            // console.log(stats); <=== always keep a console.log or node inspector handy so you can follow the flow of source through the plugin system.
            // debugger <= The "done" event ssends to parent top ctrl,
            const moduleString = stats.toJson().modules.map(module => module.identifier).join("\n");
            console.log(moduleString);
        });
        /**
         * @param {Compiler} compiler - The Compiler Instance (self)
         * @param {Function} callback - callback which signals the hook is finished and that webpack can continue to next compilation step ()
         * @description "before-run" - Runs before the compiler begins any compilation process.
         *
         */
        compiler.plugin("before-run", (compiler, callback) => {
            console.log("before-run");

            // do something before (it's async! you can do fetch some data before)
            //setTimeout(function () {
                callback();
            //}, 5000);

        });

        /**
         * @param {String} fileName - Name of the file that changed and caused the event rebuild
         * @param {Number} changeTime - A number representation of the timestamp for when the file (in question) changed
         * @description "invalid" - This event fires when in WATCH mode when a file has changed. Passing the file name and time it changed.
         * This even will execute before run-watch or other compiler hooks. Useful for a variety of things. Event logging, tracing, etc or executing something essentially
         * before anything else happens.
         *
         */
        compiler.plugin("invalid", (fileName, changeTime) => {
            console.log(`compiler:invalid:fileName-${fileName}:changeTime-${changeTime}\n The file: ${fileName} triggered a rebuild at change time ${changeTime}`);
        });


        /**
         * How to hook (multi-hook)
         */
        compiler.plugin(["run","watch-run"], (compiler, callback) => {
            console.log("run or watch-run");

            callback();
        });



        compiler.plugin("compilation", (compilation, callback) => {
            compilation.moduleTemplate.plugin("render", (moduleSource, module) => {
                console.log(`Inside ModuleTemplate Render Fn\n This is the src: ${moduleSource}`);
                console.log(moduleSource);
                return moduleSource;
            });
            compilation.moduleTemplate.plugin("package", (moduleSource, module) => {
                console.log(`Inside ModuleTemplate Render Fn\n This is the src: ${moduleSource}`);
                console.log(moduleSource);
                return moduleSource;
            });
            // questo non sembra aggiornare l'hash: meglio usare un plugin
            // compilation.moduleTemplate.plugin("hash", (hash) => {
            //
            //     console.log("****************************");
            //     console.log(hash);
            //     console.log("****************************");
            //     hash.update("TemplatePlugin");
            //     hash.update("ssssss", "sha256");
            // });
        });
    }

}

module.exports = MyPlugin;