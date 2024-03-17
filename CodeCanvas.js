// Created by Nelsen Niko
/*
cc.js or CodeCanvas.js is a lightweight JavaScript library that allows you to execute JavaScript and apply CSS dynamically within HTML documents using the <cc> tag.
*/
/* Lisensi MIT */
(function() {
    'use strict';

    var ccRun = {
        execute: function() {
            var ccElements = document.querySelectorAll('cc');
            ccElements.forEach(function(element) {
                var code = element.textContent.trim();
                try {
                    if (ccRun.isJS(code)) {
                        ccRun.executeJS(code);
                    } else if (ccRun.isJSON(code)) {
                        ccRun.executeJSON(code);
                    } else {
                        ccRun.executeCSS(code);
                    }
                } catch (error) {
                    console.error('Error executing CC code:', error.message);
                }
            });
            ccRun.cleanup();
        },

        // Method to execute HTML code
        executeHTML: function(code) {
            try {
                // Create a temporary container element
                var tempContainer = document.createElement('div');

                // Set the HTML content of the container
                tempContainer.innerHTML = code;

                // Append the container's children to the document body
                document.body.appendChild(tempContainer);
            } catch (error) {
                console.error('Error executing HTML code:',
                    error.message);
            }
        },

        executeJSON: function(json) {
            try {
                var data = JSON.parse(json);

                // Execute CSS styles
                if (data.css && Array.isArray(data.css)) {
                    data.css.forEach(function(css) {
                        ccRun.css(css.selector, css.styles);
                    });
                }

                // Execute JavaScript code
                if (data.js && Array.isArray(data.js)) {
                    data.js.forEach(function(script) {
                        ccRun.executeJS(script);
                    });
                }
            } catch (error) {
                console.error('Error executing JSON:', error.message);
            }
        },

        executeJS: function(code) {
            try {
                Function(code)();
            } catch (error) {
                console.error('Error executing JavaScript code:', error.message);
            }
        },

        executeCSS: function(code) {
            try {
                var styleElement = document.createElement('style');
                styleElement.textContent = code;
                document.head.appendChild(styleElement);
            } catch (error) {
                console.error('Error executing CSS code:', error.message);
            }
        },

        isJS: function(code) {
            try {
                new Function(code);
                return true;
            } catch (error) {
                return false;
            }
        },

        isJSON: function(code) {
            try {
                JSON.parse(code);
                return true;
            } catch (error) {
                return false;
            }
        },

        css: function(selector, styles) {
            var elements = document.querySelectorAll(selector);
            elements.forEach(function(element) {
                Object.assign(element.style, styles);
            });
        },

        generateRandomColor: function() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        },

        html: function(selector, content) {
            try {
                var elements = document.querySelectorAll(selector);
                if (elements.length > 0) {
                    elements.forEach(function(element) {
                        element.innerHTML = content;
                    });
                } else {
                    console.warn("No elements found for selector:", selector);
                }
            } catch (error) {
                console.error("Error in html method:", error.message);
            }
        },

        copyToClipboard: function(text) {
            try {
                const textArea = document.createElement("textarea");
                textArea.value = text;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand("copy");
                document.body.removeChild(textArea);

                return true; // Indicate successful copying
            } catch (error) {
                console.error("Error in copyToClipboard method:", error.message);
                return false; // Indicate failure
            }
        },

        typeText: function(element, text, delay) {
            var index = 0;
            var intervalId = setInterval(function() {
                if (index < text.length) {
                    element.textContent += text.charAt(index);
                    index++;
                } else {
                    clearInterval(intervalId);
                }
            },
                delay);
        },

        log: function(message) {
            console.log(message);
        },
        // Custom alert function
        alert: function(message) {
            window.alert(message);
        },

        // Custom confirm function
        confirm: function(message) {
            return window.confirm(message);
        },

        // Custom function for browser notifications
        browserNotification: function(title, options) {
            if ('Notification' in window) {
                Notification.requestPermission().then(function(permission) {
                    if (permission === 'granted') {
                        navigator.serviceWorker.ready.then(function(registration) {
                            registration.showNotification(title, options);
                        });
                    }
                });
            }
        },


        // Custom function for animations
        animate: function(element, animationName) {
            // Menambahkan kelas animasi ke elemen HTML
            element.classList.add('animated',
                animationName);

            // Menangani akhir animasi
            function handleAnimationEnd() {
                // Menghapus kelas animasi setelah animasi selesai
                element.classList.remove('animated',
                    animationName);

                // Menghapus event listener agar tidak memori bocor
                element.removeEventListener('animationend',
                    handleAnimationEnd);
            }

            // Menambahkan event listener untuk menangani akhir animasi
            element.addEventListener('animationend',
                handleAnimationEnd);
        },

        cleanup: function() {
            var ccElements = document.querySelectorAll('cc');
            ccElements.forEach(function(element) {
                element.parentNode.removeChild(element);
            });
            ccRun = null;
        }
    };

    document.addEventListener('DOMContentLoaded',
        function() {
            ccRun.execute();
        });

    window.ccRun = ccRun;
})();