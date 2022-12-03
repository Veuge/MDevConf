package com.mdevconf;

import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class MyNativeModule extends ReactContextBaseJavaModule {
    MyNativeModule(ReactApplicationContext context) {
        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        return "MyNativeModule";
    }

    @ReactMethod
    public void simpleLogger() {
        Log.d("MyNativeModule", "Log desde la el modulo nativo!");
    }

   @ReactMethod(isBlockingSynchronousMethod = true)
   public float getFontScaleSync() {
       return getReactApplicationContext().getResources().getConfiguration().fontScale;
   }

   @ReactMethod
   public void getFontScale(Promise p) {
       p.resolve(getFontScaleSync());
   }

   @ReactMethod(isBlockingSynchronousMethod = true)
   public String getAppVersionSync() {
       return BuildConfig.VERSION_NAME;
   }

   @ReactMethod
   public void getAppVersion(Promise p) {
    p.resolve(getAppVersionSync());
   }
}
