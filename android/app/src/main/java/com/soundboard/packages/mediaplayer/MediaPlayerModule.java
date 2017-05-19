package com.soundboard.packages.mediaplayer;

import android.app.Activity;
import android.content.Intent;
import android.media.AudioManager;
import android.media.MediaPlayer;
import android.net.Uri;

import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReactApplicationContext;
import com.soundboard.R;

public class MediaPlayerModule extends ReactContextBaseJavaModule {

    private MediaPlayer mp;

    public MediaPlayerModule(ReactApplicationContext reactContext) {
        super(reactContext);

        MediaPlayer mp = new MediaPlayer();
    }

    @Override
    public String getName() {
        return "MediaPlayer";
    }

    @ReactMethod
    public void playAudio(String slug, boolean loop) {
        Activity currentActivity = getCurrentActivity();
        String packageName = currentActivity.getPackageName();
        int sound = currentActivity.getResources().getIdentifier(slug, "raw", packageName);

        MediaPlayer instance = MediaPlayer.create(currentActivity, sound);

        if (loop) {
            instance.setLooping(true);
        }

        instance.start();

        // Make sure to release the media player so can can keep playing them
        instance.setOnCompletionListener(new MediaPlayer.OnCompletionListener() {
            @Override
            public void onCompletion(MediaPlayer mp) {
                mp.release();
            }
        });
    }
}
