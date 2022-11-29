import { EventEmitter } from 'fbemitter'
const SERVER = 'http://localhost:5000';

class ExperienteServer {
    constructor() {
        this.data = [];
        this.emitter = new EventEmitter();
    }

    async getExperiente() {
        try {
            const response = await fetch(`${SERVER}/experiente`);
            if (!response.ok) {
                throw response;
            }
            this.data = await response.json();
            this.emitter.emit('GET_EXPERIENTE_SUCCESS');
        } catch (error) {
            console.warn(error);
            this.emitter.emit('GET_EXPERIENTE_ERROR');
        }
    }

    async addExperienta(experienta) {
        try {
            const response = await fetch(`${SERVER}/experiente`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(experienta)
            });
            if (!response.ok) {
                throw response;
            }
            this.getExperiente();
        } catch (error) {
            console.warn(error);
            this.emitter.emit('ADD_EXPERIENTA_ERROR');
        }
    }

    async updateExperienta(id, experienta) {
        try {
            const response = await fetch(`${SERVER}/experiente/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(experienta)
            });
            if (!response.ok) {
                throw response;
            }
            this.getExperiente();
        } catch (error) {
            console.warn(error);
            this.emitter.emit('UPDATE_EXPERIENTA_ERROR');
        }
    }

    async deleteExperienta(id) {
        try {
            const response = await fetch(`${SERVER}/experiente/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw response;
            }
            this.getExperiente();
        } catch (error) {
            console.warn(error);
            this.emitter.emit('DELETE_EXPERIENTA_ERROR');
        }
    }
}

const experienteServer = new ExperienteServer();

export default experienteServer;