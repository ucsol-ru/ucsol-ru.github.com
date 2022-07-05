"use strict";document.addEventListener("DOMContentLoaded",function(){var e=document.getElementById("hp-input"),n=document.getElementById("kwt-input"),t=document.querySelectorAll(".convert-form__input"),u=document.getElementById("reset-form");function o(e,n,t){e=e.value/t;n.value=e.toFixed(2)}function d(){t.forEach(function(e){e.value="",e.ariaPlaceholder="0"})}function c(e){0==e.value&&(e.value="")}n.addEventListener("keyup",function(){o(n,e,.7355)}),e.addEventListener("keyup",function(){o(e,n,1.3596)}),u.addEventListener("click",function(e){e.preventDefault(),d()}),document.addEventListener("keydown",function(e){"Enter"===e.code&&(e.preventDefault(),d())}),n.addEventListener("focus",function(){c(n)}),e.addEventListener("focus",function(){c(e)})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9sZF9mb3Jtb3VsYS5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbnB1dEhwIiwiZ2V0RWxlbWVudEJ5SWQiLCJpbnB1dEt3dCIsImNhbGNGdW5jIiwiYUlucHV0IiwiYklucHV0IiwiY2YiLCJyZXN1bHQiLCJ2YWx1ZSIsInRvRml4ZWQiLCJyZXNldEZ1bmMiLCJhbGxJbnB1dHMiLCJmb3JFYWNoIiwiaW5wdXQiLCJhcmlhUGxhY2Vob2xkZXIiLCJybU51bGwiLCJyZXNldEJ1dHRvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvZGUiXSwibWFwcGluZ3MiOiJhQUFBQSxTQUFTQyxpQkFBaUIsbUJBQW9CLFdBQzVDLElBQU1DLEVBQVVGLFNBQVNHLGVBQWUsWUFEbENDLEVBQUNILFNBQWlCRSxlQUFBLGFBQ2xCRCxFQUFVRixTQUFTRyxpQkFBZSx3QkFDbENDLEVBQVdKLFNBQVNHLGVBQWUsY0FRekMsU0FBU0UsRUFBVUMsRUFBUUMsRUFBUUMsR0FDM0JDLEVBQVNILEVBQU9JLE1BQXRCRixFQUNBRCxFQUFPRyxNQUFRRCxFQUFPRSxRQUFRLEdBSWhDLFNBQVNDLElBQ1BDLEVBQVVDLFFBQVEsU0FBQUMsR0FDaEJBLEVBQU1MLE1BQVEsR0FDZEssRUFBTUMsZ0JBQWtCLE1BSzVCLFNBQVNDLEVBQU9GLEdBQ0ssR0FBZkEsRUFBTUwsUUFDUkssRUFBTUwsTUFBUSxJQUlsQk4sRUFBU0gsaUJBQWlCLFFBQVMsV0FDakNJLEVBQVNELEVBQVVGLEVBekJSLFNBNkJYRyxFQUFBQSxpQkFBa0JELFFBQVYsV0FEVkMsRUFJQUgsRUFBQUUsRUFsQ01jLFVBcUNKTixFQUFTWCxpQkFBQSxRQUFBLFNBQUFrQixHQUZYQSxFQUFBQyxpQkFLQXBCLE1BR0lZLFNBQUFBLGlCQUFTLFVBQUEsU0FBQU8sR0FDVixVQUFBQSxFQUFBRSxPQUdIRixFQUFBQyxpQkFKSVIsT0FVRkssRUFBT2YsaUJBQVAsUUFBQSxXQURGZSxFQUFBYixLQUFBRixFQUFRRCxpQkFBaUIsUUFBUyxXQUNoQ2dCLEVBQU9mIiwiZmlsZSI6Im9sZF9mb3Jtb3VsYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnN0IGlucHV0SHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHAtaW5wdXQnKVxuICBjb25zdCBpbnB1dEt3dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrd3QtaW5wdXQnKVxuICBjb25zdCBhbGxJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29udmVydC1mb3JtX19pbnB1dCcpXG4gIGNvbnN0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2V0LWZvcm0nKVxuXG4gIGNvbnN0IGNLd3QgPSAxLjM1OTZcbiAgY29uc3QgY0hwID0gMC43MzU1XG5cbiAgLy8gZm9ybXVsYVxuICBmdW5jdGlvbiBjYWxjRnVuYyAoYUlucHV0LCBiSW5wdXQsIGNmKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYUlucHV0LnZhbHVlIC8gY2ZcbiAgICBiSW5wdXQudmFsdWUgPSByZXN1bHQudG9GaXhlZCgyKSAgICBcbiAgfVxuXG4gIC8vIGNsYWVyIGlucHV0cyBmdW5jXG4gIGZ1bmN0aW9uIHJlc2V0RnVuYyAoKSB7XG4gICAgYWxsSW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICBpbnB1dC52YWx1ZSA9ICcnXG4gICAgICBpbnB1dC5hcmlhUGxhY2Vob2xkZXIgPSAnMCdcbiAgICB9KVxuICB9XG5cbiAgLy8gcmVtb3ZlIE51bGwgZnVuY3Rpb25cbiAgZnVuY3Rpb24gcm1OdWxsKGlucHV0KSB7XG4gICAgaWYgKGlucHV0LnZhbHVlID09IDAuMDApIHtcbiAgICAgIGlucHV0LnZhbHVlID0gJydcbiAgICB9XG4gIH1cblxuICBpbnB1dEt3dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsICgpID0+IHtcbiAgICBjYWxjRnVuYyhpbnB1dEt3dCwgaW5wdXRIcCwgY0hwKVxuICB9KVxuXG4gIGlucHV0SHAuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoKSA9PiB7XG4gICAgY2FsY0Z1bmMoaW5wdXRIcCwgaW5wdXRLd3QsIGNLd3QsKVxuICB9KVxuXG4gIC8vIHJlc2V0IGhhbmRsZXJcbiAgcmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHJlc2V0RnVuYygpXG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgaWYgKGUuY29kZSA9PT0gJ0VudGVyJykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICByZXNldEZ1bmMoKSBcbiAgICB9XG4gIH0pXG5cbiAgLy8gZm9jdXMgaW5wdXQgaGFuZGxlcnNcbiAgaW5wdXRLd3QuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoKT0+IHtcbiAgICBybU51bGwoaW5wdXRLd3QpXG4gIH0pXG4gIFxuICBpbnB1dEhwLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKCk9PiB7XG4gICAgcm1OdWxsKGlucHV0SHApXG4gIH0pXG59KSJdfQ==