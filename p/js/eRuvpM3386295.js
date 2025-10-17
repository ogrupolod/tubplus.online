
      function atomiShowItems({items}) {
      try {
        items.forEach((item) => {
          const hiddenItem = [...document.querySelectorAll(`#${item}`), ...document.querySelectorAll(`.${item}`)];
          console.log("hiddenItem", hiddenItem)
          if (hiddenItem?.length > 0) {
            hiddenItem.forEach(item => item.classList.remove("atomicat-delay"));
          }
        })
      } catch (error) {
        console.log(error);
      }
      }
    (function() {
          try {
              const clickeventList = [{"compKey":"67ab0a3","misc":{"type":"image"}},{"compKey":"641e004","misc":{"type":"image"}},{"compKey":"89c8a6d","misc":{"type":"button"}},{"compKey":"5aaa08d","misc":{"type":"button"}},{"compKey":"9de624e","misc":{"type":"text"}},{"compKey":"f1733db","misc":{"type":"text"}}];
    
    
              clickeventList.forEach((comp, index) => {
                  const compKey = comp?.compKey;
                  const eleType = comp?.misc?.type;
                  
                  
                  
                  
                  
                  
              });
    
          } catch (error) {
              return error;
          }
      })();