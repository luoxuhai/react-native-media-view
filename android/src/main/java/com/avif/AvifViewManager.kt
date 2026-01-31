package com.avif

import android.graphics.Color
import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.ViewManagerDelegate
import com.facebook.react.uimanager.annotations.ReactProp
import com.facebook.react.viewmanagers.AvifViewManagerInterface
import com.facebook.react.viewmanagers.AvifViewManagerDelegate

@ReactModule(name = AvifViewManager.NAME)
class AvifViewManager : SimpleViewManager<AvifView>(),
  AvifViewManagerInterface<AvifView> {
  private val mDelegate: ViewManagerDelegate<AvifView>

  init {
    mDelegate = AvifViewManagerDelegate(this)
  }

  override fun getDelegate(): ViewManagerDelegate<AvifView>? {
    return mDelegate
  }

  override fun getName(): String {
    return NAME
  }

  public override fun createViewInstance(context: ThemedReactContext): AvifView {
    return AvifView(context)
  }

  @ReactProp(name = "color")
  override fun setColor(view: AvifView?, color: Int?) {
    view?.setBackgroundColor(color ?: Color.TRANSPARENT)
  }

  companion object {
    const val NAME = "AvifView"
  }
}
