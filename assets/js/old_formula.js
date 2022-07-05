"use strict";document.addEventListener("DOMContentLoaded",function(){var e=document.getElementById("hp-input"),n=document.getElementById("kwt-input"),t=document.querySelectorAll(".convert-full__input"),u=document.getElementById("reset-form");function d(e,n,t){e=e.value/t;n.value=e.toFixed(2)}function o(){t.forEach(function(e){e.value="",e.ariaPlaceholder="0"})}function c(e){0==e.value&&(e.value="")}n.addEventListener("keyup",function(){d(n,e,.7355)}),e.addEventListener("keyup",function(){d(e,n,1.3596)}),u.addEventListener("click",function(e){e.preventDefault(),o()}),document.addEventListener("keydown",function(e){"Enter"===e.code&&(e.preventDefault(),o())}),n.addEventListener("focus",function(){c(n)}),e.addEventListener("focus",function(){c(e)})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9sZF9mb3JtdWxhLmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImlucHV0SHAiLCJnZXRFbGVtZW50QnlJZCIsImlucHV0S3d0IiwiY2FsY0Z1bmMiLCJhSW5wdXQiLCJiSW5wdXQiLCJjZiIsInJlc3VsdCIsInZhbHVlIiwidG9GaXhlZCIsInJlc2V0RnVuYyIsImFsbElucHV0cyIsImZvckVhY2giLCJpbnB1dCIsImFyaWFQbGFjZWhvbGRlciIsInJtTnVsbCIsInJlc2V0QnV0dG9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29kZSJdLCJtYXBwaW5ncyI6ImFBQUFBLFNBQVNDLGlCQUFpQixtQkFBb0IsV0FDNUMsSUFBTUMsRUFBVUYsU0FBU0csZUFBZSxZQURsQ0MsRUFBQ0gsU0FBaUJFLGVBQUEsYUFDbEJELEVBQVVGLFNBQVNHLGlCQUFlLHdCQUNsQ0MsRUFBV0osU0FBU0csZUFBZSxjQVF6QyxTQUFTRSxFQUFVQyxFQUFRQyxFQUFRQyxHQUMzQkMsRUFBU0gsRUFBT0ksTUFBdEJGLEVBQ0FELEVBQU9HLE1BQVFELEVBQU9FLFFBQVEsR0FJaEMsU0FBU0MsSUFDUEMsRUFBVUMsUUFBUSxTQUFBQyxHQUNoQkEsRUFBTUwsTUFBUSxHQUNkSyxFQUFNQyxnQkFBa0IsTUFLNUIsU0FBU0MsRUFBT0YsR0FDSyxHQUFmQSxFQUFNTCxRQUNSSyxFQUFNTCxNQUFRLElBSWxCTixFQUFTSCxpQkFBaUIsUUFBUyxXQUNqQ0ksRUFBU0QsRUFBVUYsRUF6QlIsU0E2QlhHLEVBQUFBLGlCQUFrQkQsUUFBVixXQURWQyxFQUlBSCxFQUFBRSxFQWxDTWMsVUFxQ0pOLEVBQVNYLGlCQUFBLFFBQUEsU0FBQWtCLEdBRlhBLEVBQUFDLGlCQUtBcEIsTUFHSVksU0FBQUEsaUJBQVMsVUFBQSxTQUFBTyxHQUNWLFVBQUFBLEVBQUFFLE9BR0hGLEVBQUFDLGlCQUpJUixPQVVGSyxFQUFPZixpQkFBUCxRQUFBLFdBREZlLEVBQUFiLEtBQUFGLEVBQVFELGlCQUFpQixRQUFTLFdBQ2hDZ0IsRUFBT2YiLCJmaWxlIjoib2xkX2Zvcm11bGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjb25zdCBpbnB1dEhwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hwLWlucHV0JylcbiAgY29uc3QgaW5wdXRLd3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna3d0LWlucHV0JylcbiAgY29uc3QgYWxsSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbnZlcnQtZnVsbF9faW5wdXQnKVxuICBjb25zdCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNldC1mb3JtJylcblxuICBjb25zdCBjS3d0ID0gMS4zNTk2XG4gIGNvbnN0IGNIcCA9IDAuNzM1NVxuXG4gIC8vIGZvcm11bGFcbiAgZnVuY3Rpb24gY2FsY0Z1bmMgKGFJbnB1dCwgYklucHV0LCBjZikge1xuICAgIGNvbnN0IHJlc3VsdCA9IGFJbnB1dC52YWx1ZSAvIGNmXG4gICAgYklucHV0LnZhbHVlID0gcmVzdWx0LnRvRml4ZWQoMikgICAgXG4gIH1cblxuICAvLyBjbGFlciBpbnB1dHMgZnVuY1xuICBmdW5jdGlvbiByZXNldEZ1bmMgKCkge1xuICAgIGFsbElucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgaW5wdXQudmFsdWUgPSAnJ1xuICAgICAgaW5wdXQuYXJpYVBsYWNlaG9sZGVyID0gJzAnXG4gICAgfSlcbiAgfVxuXG4gIC8vIHJlbW92ZSBOdWxsIGZ1bmN0aW9uXG4gIGZ1bmN0aW9uIHJtTnVsbChpbnB1dCkge1xuICAgIGlmIChpbnB1dC52YWx1ZSA9PSAwLjAwKSB7XG4gICAgICBpbnB1dC52YWx1ZSA9ICcnXG4gICAgfVxuICB9XG5cbiAgaW5wdXRLd3QuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoKSA9PiB7XG4gICAgY2FsY0Z1bmMoaW5wdXRLd3QsIGlucHV0SHAsIGNIcClcbiAgfSlcblxuICBpbnB1dEhwLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKCkgPT4ge1xuICAgIGNhbGNGdW5jKGlucHV0SHAsIGlucHV0S3d0LCBjS3d0LClcbiAgfSlcblxuICAvLyByZXNldCBoYW5kbGVyXG4gIHJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICByZXNldEZ1bmMoKVxuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgIGlmIChlLmNvZGUgPT09ICdFbnRlcicpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgcmVzZXRGdW5jKCkgXG4gICAgfVxuICB9KVxuXG4gIC8vIGZvY3VzIGlucHV0IGhhbmRsZXJzXG4gIGlucHV0S3d0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKCk9PiB7XG4gICAgcm1OdWxsKGlucHV0S3d0KVxuICB9KVxuICBcbiAgaW5wdXRIcC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpPT4ge1xuICAgIHJtTnVsbChpbnB1dEhwKVxuICB9KVxufSkiXX0=