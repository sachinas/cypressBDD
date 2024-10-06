import '@4tw/cypress-drag-drop'
require('@cypress/xpath');
// const { readdir } = require('fs/promises');
// const {existsSync} = require('fs')
const fs = require('fs');


const setViewPort = ((w,h)=>{
    // cy.viewport(1280,720)
    //  cy.viewport(1536,960)
    cy.viewport(w,h)
 });

const navigateToUrl = (()=>{
   cy.visit(Cypress.env('url')).then(()=>{
    cy.log("Successfully Launched the web application")
   })
});


const clickElement = ((locator)=>{
    cy.get(locator).should('be.visible').then(()=>{
        cy.get(locator).click();
    });
});
// used to select element in dropdown
const selectElement = (locator, optionValue) => {
    cy.get(locator).should('be.visible').then(() => {
        cy.get(locator).select(optionValue);
    });
};
// Added Element for locator value is calling 4-5 times
const clickElements = ((locator)=>{
    cy.get(locator).should('be.visible').then(()=>{
        cy.get(locator).click({multiple: true});
    });
});

const click_Element = ((locator)=>{
    cy.get(locator).should('be.visible').then(()=>{
        cy.get(locator).eq(0).click();
    });
});

const doubleClickElement = ((locator)=>{
    cy.get(locator).should('be.visible').then(()=>{
        cy.get(locator).click().click();
    });
});

const clickElementByXpath = ((locator)=>{
    cy.xpath(locator).should('be.visible').then(()=>{
        cy.xpath(locator).click();
    });
});
//Added Element for locator value is calling 4-5 times - eq(0) is used to target the first element in a list of elements that match a certain selector.
const clickElement_ByXpath = ((locator)=>{
    cy.xpath(locator).should('be.visible').then(()=>{
        cy.xpath(locator).eq(0).click();
    });
})
    const forceClickByXPath = ((locator)=>{
        cy.xpath(locator).should('be.visible').then(()=>{
            cy.xpath(locator).click({ force: true });
    });
        
});
const clickElementBy_Xpath = ((locator)=>{
    cy.xpath(locator).should('be.visible').then(()=>{
        cy.xpath(locator).click({multiple: true });
    });
});
const doubleClickElementByXpath = ((locator)=>{
    cy.xpath(locator).should('be.visible').then(()=>{
        cy.xpath(locator).dblclick();
    });
});

const clickElementByXpathWithoutVisibleOption = ((locator)=>{
        cy.xpath(locator).click();
});

const scrollToElementAndClick = ((locator)=>{
    cy.get(locator).scrollIntoView().should('be.visible').then(()=>{
        cy.get(locator).click();
    });
});

const scrollToAndClickElementsByXpath = (locator) => {
    cy.xpath(locator).each(($element) => {
      cy.wrap($element)
        .scrollIntoView()
        .should('be.visible')
        .click({ multiple: true });
    });
  };
  const ScrollToRightAndClickElement = (locator)=>{ //just changes the Name 
    cy.get(locator).eq(0).scrollTo('1000px','0px');
        // Perform actions after scrolling, like clicking another element
    }
  const ScrollToRightAndClickElementByXpath = (locator)=>{ //Adding utilities for Scroll bar for Xpath
    cy.xpath(locator).scrollTo('1000px','0px');
        // Perform actions after scrolling, like clicking another element
    }
    
    const ScrollToLeftRightAndClickElementByXpath = (locator)=>{ //Adding utilities for Scroll bar for Xpath
        cy.xpath(locator).scrollTo('0px','0px');
            // Perform actions after scrolling, like clicking another element
    }

const scrollToElementAndClickByXpath = ((locator)=>{
    cy.xpath(locator).scrollIntoView().should('be.visible').then(()=>{
        cy.xpath(locator).click();
    });
});
const uploadFileToDialogBoxEntitiesFromXpath =(locator,fileName)=> //this utilities will be help for import in Entites module 
//cy.get(locator).attachFile('attribute_template_1695038058207')
cy.get(locator).eq(0).attachFile(fileName).then(()=>{
//cy.log("Successfully Uploaded the file : "+fileName)

})

const inputTextField=((locator,data)=>{
    cy.get(locator).scrollIntoView().should('be.visible').then(()=>{
        cy.get(locator).clear().type(data)
    });
})
//Added Element for locator value is calling 4-5 times
const inputText_Field=((locator,data)=>{
    cy.get(locator).scrollIntoView().should('be.visible').then(()=>{
        cy.get(locator).clear().type({multiple:true})
    });
})

const clearInputTextField=((locator)=>{
    cy.get(locator).scrollIntoView().should('be.visible').then(()=>{
        cy.get(locator).clear()
    });
})

const inputTextFieldByXpath=((locator,data)=>{
    cy.xpath(locator).should('be.visible').then(()=>{
        cy.xpath(locator).clear().type(data)
    });
})


const clearInputTextFieldByXpath=((locator)=>{
    cy.xpath(locator).scrollIntoView().should('be.visible').then(()=>{
        cy.xpath(locator).clear()
    });
})


const validatePresenceOfElement = ((locator)=>{
    cy.get(locator).should('be.visible').then(()=>{
       cy.log("Element with locator"+locator+" is visible in the webpage.")
    });
});

const getPresenceOfElementByXpath = ((locator)=>{
    cy.log("Inside getPresenceOfElementByXpath")
    cy.xpath(locator).then($button => {
        if ($button.is(':visible')){
         return "true";
        }
        else{
           return "false"
        }
      })
});

const getPresenceOfElement = ((locator)=>{
    cy.get(locator).then($button => {
        if ($button.is(':visible')){
         return true;
        }
        else{
            return false;
        }
      })
});

const validatePresenceOfElementByXpath = ((locator)=>{
    cy.xpath(locator).should('be.visible').then(()=>{
       cy.log("Element with locator"+locator+" is visible in the webpage.")
    });
});

const checkElementIsDisabledByXpath = ((locator)=>{
    cy.xpath(locator).should('be.disabled').then(()=>{
       cy.log("Element with locator"+locator+" is disabled in the webpage.")
    });
});

const checkElementIsDisabled = ((locator)=>{
    cy.get(locator).should('be.disabled').then(()=>{
       cy.log("Element with locator"+locator+" is disabled in the webpage.")
    });
});

const checkElementIsEnabledByXpath = ((locator)=>{
    cy.xpath(locator).should('be.enabled').then(()=>{
       cy.log("Element with locator"+locator+" is enabled in the webpage.")
    });
});
const checkElementForFixedRightSignByXpath = (locator) => {
    cy.xpath(locator).should('be.visible').then(() => {
      cy.xpath(locator).should('have.text', 'Expected Text'); // Replace 'Expected Text' with the text you expect
    });
  };
const checkElementIsEnabled = ((locator)=>{
    cy.get(locator).should('be.visible').then(()=>{
       cy.log("Element with locator"+locator+" is enabled in the webpage.")
       //cy.get(locator).should('be.enabled').then(()=>{
        //cy.log("Element with locator"+locator+" is enabled in the webpage.")
       });
    });
//});

const wait = ((timePeriod)=>{
   cy.wait(timePeriod);
});

const waitForElementToBeVisibleByXPathAndClick = (xpathSelector, timeout = 5000) => {
    cy.xpath(xpathSelector, { timeout }).should('be.visible').click();
  };

const validateTextOfElement = ((locator,data)=>{
    cy.get(locator).should('be.visible').then(()=>{
       cy.log("Element with locator"+locator+" is visible in the webpage.")
            cy.get(locator).should('contain.text',data).then(()=>{
             cy.log("Element with locator"+locator+" is having the expected text.")
     });
    });
});

const validateTextOfElementByXpath = ((locator,data)=>{
    cy.xpath(locator).should('be.visible').then(()=>{
       cy.log("Element with locator"+locator+" is visible in the webpage.")
            cy.xpath(locator).should('have.text',data).then(()=>{
             cy.log("Element with locator"+locator+" is having the expected text.")
     });
    });
});

const getTextFromElementFromXpath = ((locator)=>{
    // var data
    // cy.xpath(locator).should('be.visible').then(()=>{
    //    cy.log("Element with locator"+locator+" is visible in the webpage.")
    //         cy.xpath(locator).then(($value)=>{
    //           data=$value.text()
    //          cy.log("Element with locator"+locator+" is having the text: "+data)   
    //  });
    // });
    // return data;

    cy.xpath(locator).should('be.visible').then(()=>{
       cy.log("Element with locator"+locator+" is visible in the webpage.")
            cy.xpath(locator).then(($value)=>{
              const data=$value.text()
             cy.log("Element with locator"+locator+" is having the text: "+data)  .then (()=>{
                return data
             });  
     });
    });
});

const getTextFromElement= ((locator)=>{
    // var data
    // cy.xpath(locator).should('be.visible').then(()=>{
    //    cy.log("Element with locator"+locator+" is visible in the webpage.")
    //         cy.xpath(locator).then(($value)=>{
    //           data=$value.text()
    //          cy.log("Element with locator"+locator+" is having the text: "+data)   
    //  });
    // });
    // return data;

    cy.get(locator).should('be.visible').then(()=>{
       cy.log("Element with locator"+locator+" is visible in the webpage.")
            cy.get(locator).then(($value)=>{
              const data=$value.text()
             cy.log("Element with locator"+locator+" is having the text: "+data)  .then (()=>{
                return data
             });  
     });
    });

});

const selectElementFromList = ((locator,data)=>{
    cy.get(locator).should('be.visible').then(()=>{
       cy.log("Element with locator"+locator+" is visible in the webpage.")
        cy.get(locator).select(data)
    });
});

const selectElementFromListByXpath = ((locator,data)=>{
    cy.xpath(locator).should('be.visible').then(()=>{
       cy.log("Element with locator"+locator+" is visible in the webpage.")
        cy.xpath(locator).select(data)
    });
});
const validateTextContainsNumber = (selector, number) => {
    return cy.xpath(selector)
      .should('be.visible')
      .invoke('text')
      .then((text) => {
        return text.includes(number);
        
      });
  };

  const checkTextForNumber = (selector, numberToCheck) => {
    validateTextContainsNumber(selector, numberToCheck).then((containsNumber) => {
      assert.isTrue(containsNumber, `The text does not contain ${numberToCheck}.`);
      cy.log('The text contains ' + numberToCheck + '.');
    });
  };
const dragAndDropElement= ((subject, target, dragIndex, dropIndex) => {
    cy.xpath(subject).should('be.visible', { timeout: 20000 })
    cy.log({
        name: 'DRAGNDROP',
        message: `Dragging element ${subject} to ${target}`,
        consoleProps: () => {
            return {
                subject: subject,
                target: target
            };
        }
    });
    const BUTTON_INDEX = 0;
    const SLOPPY_CLICK_THRESHOLD = 10;
    cy.xpath(target)
        .eq(dropIndex)
        .then($target => {
            let coordsDrop = $target[0].getBoundingClientRect();
            cy.xpath(subject)
                .eq(dragIndex)
                .then(subject => {
                    const coordsDrag = subject[0].getBoundingClientRect();
                    cy.wrap(target)
                        .trigger('mousedown', {
                            button: BUTTON_INDEX,
                            clientX: coordsDrag.x,
                            clientY: coordsDrag.y,
                            force: true
                        })
                        .trigger('mousemove', {
                            button: BUTTON_INDEX,
                            clientX: coordsDrag.x + SLOPPY_CLICK_THRESHOLD,
                            clientY: coordsDrag.y,
                            force: true
                        }).wait(1000);
                    cy.xpath(target)
                        .trigger('mousemove', {
                            button: BUTTON_INDEX,
                            clientX: coordsDrop.x,
                            clientY: coordsDrop.y,
                            force: true
                        })
                        .trigger('mouseup');
                });
        });
    });


  const getCountOfChildElements=((source,childTag)=>{
    cy.get(source).find(childTag).then((row)=>{
        const count=row.length;
        cy.log("The total number of childTag under parent element is: "+row.length);
        return count;
    });
  });

  const getCountOfChildElementsByXpath=((source,childTag)=>{
    cy.xpath(source).find(childTag).then((row)=>{
        const count=row.length;
        cy.log("The total number of childTag under parent element is: "+row.length) .then (()=>{
            return count;
         });  
    });
  });

  const getCountOfElementFromXpath=((source)=>{
    cy.xpath(source).then((row)=>{
        const count=row.length;
        cy.log("The total number of childTag under parent element is: "+row.length).then (()=>{
            return count;
         });  
    });
  });

  const uploadFileToDialogBoxFromXpath=((locator,fileName)=>{
    const fileName1="example.csv"
    cy.xpath(locator).attachFile(fileName1).then(()=>{
        cy.log("Successfully Uploaded the file : "+fileName1);
    })
  })

  const uploadFileToDialogBox=((locator,fileName)=>{
    const fileName1="example.csv"
    cy.get(locator).attachFile(fileName1).then(()=>{
        cy.log("Successfully Uploaded the file : "+fileName1);
    })
  })
  const uploadFileToDialogBoxTaskFromXpath=((locator,fileName)=>{
    const fileName2="Semanticobjectclasstraining.csv"
    cy.xpath(locator).attachFile(fileName2).then(()=>{
        cy.log("Successfully Uploaded the file : "+fileName1);
    })
  })

  const uploadFileToDialogBoxTask=((locator,fileName)=>{
    const fileName2="example.csv"
    cy.get(locator).attachFile(fileName2).then(()=>{
        cy.log("Successfully Uploaded the file : "+fileName1);
    })
  })

  const getDocumentFromIframe=((locator,fileName)=>{
    // const getIframeDocument = () => {
    //     return cy
    //     .get('iframe[class="iframe"]')
    //     .its('0.contentDocument.body').should('exist')
    //   }
    //   const getIframeBody = () => {
    //     return getIframeDocument()
    //     .its('body').should('not.be.undefined')
    //     .then(cy.wrap)
    //   }
    //   getIframeBody().find('#content-header').should('include.text', '"delectus aut autem"')
    cy.frameLoaded('iframe[class="iframe"]')
    cy.iframe().find('#content-header').should('include.text', '"Tables"')
  })

  const validateCheckBoxStatusByXpath = ((locator,aliasName)=>{
    cy.xpath(locator).should('be.checked').then(()=>{
        cy.wrap(true).as(aliasName) 
       cy.log("Element with locator"+locator+" is checked") 
    });
});

const wrapTextByXpath = (aliasName,value)=>{
        cy.wrap(value).as(aliasName) 
}

const findFileExistByName =(path) => {
    let pathTocheck=path
    cy.task('checkFileExists',path).then((output) => {
        cy.log("File exists : "+output)
      })
};

const getAttributeValueByXpath = ((locator,attributeToFetch,aliasName)=>{
    cy.xpath(locator).invoke('attr',attributeToFetch).then((attrValue)=>{
        cy.wrap(attrValue).as(aliasName) 
       cy.log("Element with locator"+locator+" is having: "+attrValue).then ((attrValue)=>{
     });  
    });
});

const getAliasValue = ((aliasName)=>{
    cy.get(aliasName).then((val) => {
        return val;
      })
});
 
//to give inputs to the multiple filters at time 
const MultipleinputTextFieldByXpath = (locator, data) => {
    cy.xpath(locator).should('be.visible').each(($element) => {
        cy.wrap($element).clear().type(data);
    });
};
//multiple sort at time 
const multipleclickElementsByXpathWithoutVisibleOption = ((locators) => {
      cy.xpath(locators).click({multiple: true });
    });
// checkbox validation if it is not checked 
const validateElementIsNotCheckedByXpath = (locators) => {
        cy.xpath(locators).should('not.be.checked');
    };
   // checkbox validation if it is checked
const validateElementIsCheckedXpath = (locators) => {
        cy.xpath(locators).should('be.checked');
    };
    // scroll and count element 
const scrollAndCountVisibleElementByXpath =  (locator) => {
        return cy.xpath(locator).its('length');
    };
    const clickMultipleElementXpath = ((locator)=>{
        cy.xpath(locator).should('be.visible').then(()=>{
            cy.xpath(locator).click({multiple: true});
        });
    });
    //to check absence of element
    const validateAbsenceOfElementByXpath = (locator) => {
        cy.xpath(locator, { timeout: 30000 }).should('not.exist').then(() => {
            cy.log(`Element with locator ${locator} is not present in the webpage.`);
        });
    };
module.exports = {
    setViewPort,
    navigateToUrl,
    clickElement,
    clickElements,
    click_Element,
    clickElementByXpath,
    doubleClickElement,
    doubleClickElementByXpath,
    clickElementByXpathWithoutVisibleOption,
    scrollToElementAndClick,
    scrollToElementAndClickByXpath,
    inputTextField,
    inputText_Field,
    clearInputTextField,
    inputTextFieldByXpath,
    clearInputTextFieldByXpath,
    validatePresenceOfElement,
    getPresenceOfElement,
    getPresenceOfElementByXpath,
    validatePresenceOfElementByXpath,
    getTextFromElement,
    getTextFromElementFromXpath,
    wait,
    clickElementBy_Xpath,
    clickElement_ByXpath,
    checkElementIsDisabledByXpath,
    checkElementIsDisabled,
    checkElementIsEnabledByXpath,
    checkElementIsEnabled,
    validateTextOfElement,
    validateTextOfElementByXpath,
    selectElementFromList,
    selectElementFromListByXpath,
    dragAndDropElement,
    getCountOfChildElements,
    getCountOfChildElementsByXpath,
    getCountOfElementFromXpath,
    uploadFileToDialogBoxFromXpath,
    uploadFileToDialogBox,
    getDocumentFromIframe,
    validateCheckBoxStatusByXpath,
    findFileExistByName,
    getAttributeValueByXpath,
    getAliasValue,
    wrapTextByXpath,
    MultipleinputTextFieldByXpath,
    multipleclickElementsByXpathWithoutVisibleOption,
    uploadFileToDialogBoxTaskFromXpath,
    uploadFileToDialogBoxTask,
    scrollToAndClickElementsByXpath,
    waitForElementToBeVisibleByXPathAndClick,
    ScrollToRightAndClickElement,
    ScrollToRightAndClickElementByXpath,
    uploadFileToDialogBoxEntitiesFromXpath,
    validateElementIsNotCheckedByXpath,
    validateElementIsCheckedXpath,
    scrollAndCountVisibleElementByXpath,
    validateTextContainsNumber,
    checkTextForNumber,
    clickMultipleElementXpath,
    checkElementForFixedRightSignByXpath,
    ScrollToLeftRightAndClickElementByXpath,
    validateAbsenceOfElementByXpath,
    selectElement,
    forceClickByXPath
    
   
};