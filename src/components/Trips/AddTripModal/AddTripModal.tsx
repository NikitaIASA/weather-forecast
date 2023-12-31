import { FC } from "react";
import { useForm, Controller } from "react-hook-form";

import "./AddTripModal.scss";

interface ModalProps {
  cities: string[];
  onSave: (formData: FormData) => void;
  onCancel: () => void;
}

export interface FormData {
  city: string;
  startDate: string;
  endDate: string;
}

// Prevent click propagation within the modal (to close modal when user clicks outside it)
const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
  event.stopPropagation();
};

export const Modal: FC<ModalProps> = ({ cities, onSave, onCancel }) => { // Our form data using react-hook-forms
  const {
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      city: "",
      startDate: "",
      endDate: "",
    },
  });

  // Determine if Save button should be disabled
  const startDate = watch("startDate");
  const endDate = watch("endDate");
  const isSaveDisabled = new Date(startDate) >= new Date(endDate);

  return (
    <div className="modal" onClick={onCancel}>
      <div className="modal__content" onClick={handleModalClick}>
        <div className="modal__top">
          <h2 className="modal__title">Create trip</h2>
          <p
            className="modal__close"
            onClick={() => {
              onCancel();
              reset();
            }}
          >
            X
          </p>
        </div>
        <form
          onSubmit={handleSubmit((data: FormData) => {
            onSave(data);
            reset();
          })}
        >
          <div className="modal__form">
            <div className="modal__form-group">
              <label htmlFor="city">City</label>
              <Controller
                name="city"
                control={control}
                rules={{ required: "City is required" }}
                render={({ field }) => (
                  <select {...field} id="city">
                    <option value="">Please select a city</option>
                    {cities && cities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                )}
              />
              {errors.city && (
                <span className="error-message">{errors.city.message}</span>
              )}
            </div>
            <div className="modal__form-group">
              <label htmlFor="startDate">Start date</label>
              <Controller
                name="startDate"
                control={control}
                rules={{ required: "Start Date is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="date"
                    id="startDate"
                    placeholder="Select Date"
                    min={new Date().toISOString().split("T")[0]}
                    max={
                      new Date(new Date().getTime() + 15 * 24 * 60 * 60 * 1000)
                        .toISOString()
                        .split("T")[0]
                    }
                  />
                )}
              />
              {errors.startDate && (
                <span className="error-message">
                  {errors.startDate.message}
                </span>
              )}
            </div>
            <div className="modal__form-group">
              <label htmlFor="endDate">End date</label>
              <Controller
                name="endDate"
                control={control}
                rules={{ required: "End Date is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="date"
                    id="endDate"
                    placeholder="Select Date"
                    min={new Date().toISOString().split("T")[0]}
                    max={
                      new Date(new Date().getTime() + 15 * 24 * 60 * 60 * 1000)
                        .toISOString()
                        .split("T")[0]
                    }
                  />
                )}
              />
              {errors.endDate && (
                <span className="error-message">{errors.endDate.message}</span>
              )}
            </div>
          </div>
          <div className="modal__buttons">
            <button
              type="button"
              onClick={() => {
                onCancel();
                reset();
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={isSaveDisabled ? "disabled" : ""}
              disabled={isSaveDisabled}
            >
              Save
            </button>
          </div>
          {isSaveDisabled && (
            <p className="error-message">
              The start date of the trip cannot be later than the end date
            </p>
          )}
        </form>
      </div>
    </div>
  );
};
