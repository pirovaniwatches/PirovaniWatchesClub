import { Component, OnInit } from "@angular/core";
import { SwUpdate } from "@angular/service-worker";
import { LocalStorageService } from "@shared/providers";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit{
  title = "app";
  themes = ['theme-light', 'theme-dark'];
  private _selectedTheme;
  get selectedTheme() {
      return this._selectedTheme;
  }
  set selectedTheme(newTheme) {
      this._selectedTheme = newTheme;
      this.themeChanged(newTheme);
  }

  constructor(private swUpdate: SwUpdate, private storage: LocalStorageService) {}

  ngOnInit() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        if (confirm("Nova versão disponivel. Atualizar para nova versão?")) {
          window.location.reload();
        }
      });
    }

    this.selectedTheme = this.storage.get('selectedTheme', this.themes[1]);
  }

  private themeChanged(newTheme) {
    var element = document.querySelector("body");
    element.className = newTheme;
    this.storage.set('selectedTheme', newTheme);
  }
  
}
