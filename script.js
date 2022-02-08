 require(["esri/views/MapView", "esri/WebMap"], (MapView, WebMap) => {
        const webmap = new WebMap({
          portalItem: {
            // autocasts as new PortalItem()
            id: "96032bcbb4cc4e2f806c7d66c1da7a07"
          }
        });

        const view = new MapView({
          map: webmap,
          container: "viewDiv"
        });
      });
