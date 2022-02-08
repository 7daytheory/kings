self.addEventListener("sync", (e) => {
  if (e.tag === "sendFile-sync") {
    console.log("SW Sync : Sync Found!");
    e.waitUntil(fetchFile());
  } else {
    console.log("SW Sync : No Sync Found");
  }
});

