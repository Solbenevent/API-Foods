import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { getDiets } from "../../Redux/actions";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import FormLabel from "react-bootstrap/esm/FormLabel";
import Button from "react-bootstrap/Button";
import FormText from "react-bootstrap/esm/FormText";

const CreateRecipe = () => {
  //Dispatch y Selector
  const dispatch = useDispatch();
  const diets = useSelector((state) => state.diets);

  //local States
  //useEffect
  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);

  // useForm
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: { diets: [] } });

  const selectedDiets = watch("diets");

  //Manejo envío de formulario
  const onSubmit = async (data) => {
    try {
      console.log(data);
      const { name, summary, healthScore, image, steps, diets } = data;
      const selectedDiets = data.diets.map((diet) => diet); // Esto asume que cada dieta tiene un campo "name"

      const formData = {
        name,
        summary,
        healthScore,
        image,
        diets: selectedDiets,
        steps: steps.split("\n"),
      };

      await axios.post("http://localhost:3001/recipes", formData);
      console.log(formData);
    } catch (error) {
      console.log(error);
      throw new Error("Error al enviar el formulario: " + error);
    }
  };

  //RENDER
  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="name">
          <FormLabel>Nombre:</FormLabel>
          <Form.Control
            type="text"
            id="inputName"
            aria-describedby="nameHelpBlock"
            {...register("name", {
              required: {
                value: true,
                message: "El nombre es requerido",
              },
              minLength: {
                value: 2,
                message: "El nombre debe tener al menos 2 caracteres",
              },
              maxLength: {
                value: 25,
                message: "El nombre no puede contener mas de 25 caracteres",
              },
            })}
          />
          {/* <Form.Text>
            {errors.name && <span>{errors.name.message}</span>}
          </Form.Text> */}
          {errors.name && (
            <FormText id="nameHelpBlock" className="text-danger">
              {errors.name.message}
            </FormText>
          )}
        </Form.Group>

        <Form.Group>
          <FormLabel htmlFor="image">URL de Imagen:</FormLabel>
          <input
            type="text"
            {...register("image", {
              required: true,
            })}
          />
          <Form.Text>
            {errors.image && <span>La imagen es requerida</span>}
          </Form.Text>
        </Form.Group>

        <Form.Group>
          <FormLabel htmlFor="summary">Descripción</FormLabel>
          <textarea
            {...register("summary", {
              required: true,
            })}
          />
          <Form.Text>
            {errors.summary && <span>La descripción es requerida</span>}
          </Form.Text>
        </Form.Group>

        <Form.Group>
          <FormLabel htmlFor="healthScore">Puntuación de salud:</FormLabel>
          <input
            type="number"
            {...register("healthScore", {
              required: true,
            })}
          />
          <Form.Text>
            {errors.healthScore && <span>La puntuación es requerida</span>}
          </Form.Text>
        </Form.Group>

        <Form.Group>
          <FormLabel htmlFor="steps">Paso a paso:</FormLabel>
          <Form.Control
            as="textarea"
            rows={3}
            {...register("steps", {
              required: true,
            })}
          />
          <Form.Text>
            {errors.steps && <span>Al menos un paso es requerida</span>}
          </Form.Text>
        </Form.Group>

        <Form.Group className="container-form-diet">
          <FormLabel className="form-diet">Selecciona una dieta:</FormLabel>
          {diets?.map((diet, index) => (
            <Form.Check key={diet}>
              <Form.Check.Input
                key={index}
                type="checkbox"
                name="diets"
                value={diet}
                {...register("diets", {
                  required: {
                    value: true,
                    message: "Selecciona al menos una dieta",
                  },
                })}
              />
              <FormLabel>{diet}</FormLabel>
            </Form.Check>
          ))}

          {/* <Form.Text>
            {errors.diets && <span>Selecciona al menos una dieta</span>}
          </Form.Text> */}
          {errors.diets && (
            <Form.Text className="text-danger">
              {"Selecciona al menos una dieta"}
            </Form.Text>
          )}
        </Form.Group>
        <Button type="submit" variant="primary">
          Crear
        </Button>
      </Form>
    </div>
  );
};

export default CreateRecipe;
